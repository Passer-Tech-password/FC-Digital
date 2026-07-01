"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Eye, Search, X, Loader2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { TestimonialType } from "@/types";

const TestimonialsAdminPage: React.FC = () => {
  const { db } = useAuth();
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<TestimonialType | null>(null);
  const [formData, setFormData] = useState<Partial<TestimonialType>>({
    name: "",
    role: "",
    company: "",
    content: "",
    avatar: "",
    rating: 5,
  });

  const fetchTestimonials = async () => {
    if (!db) return;
    try {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as TestimonialType[];
      setTestimonials(testimonialsData);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [db]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    try {
      if (editingTestimonial) {
        const testimonialRef = doc(db, "testimonials", editingTestimonial.id);
        await updateDoc(testimonialRef, {
          ...formData,
          updatedAt: Timestamp.now(),
        });
      } else {
        await addDoc(collection(db, "testimonials"), {
          ...formData,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });
      }
      setIsModalOpen(false);
      resetForm();
      fetchTestimonials();
    } catch (error) {
      console.error("Error saving testimonial:", error);
    }
  };

  const handleEdit = (testimonial: TestimonialType) => {
    setEditingTestimonial(testimonial);
    setFormData(testimonial);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!db || !confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      await deleteDoc(doc(db, "testimonials", id));
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  const resetForm = () => {
    setEditingTestimonial(null);
    setFormData({
      name: "",
      role: "",
      company: "",
      content: "",
      avatar: "",
      rating: 5,
    });
  };

  const filteredTestimonials = testimonials.filter((testimonial) =>
    testimonial.name.toLowerCase().includes(search.toLowerCase()) ||
    testimonial.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Testimonials</h1>
          <p className="text-text-secondary">Manage customer testimonials</p>
        </div>
        <Button onClick={() => { resetForm(); setIsModalOpen(true); }}>
          <Plus size={20} className="mr-2" />
          Add Testimonial
        </Button>
      </div>

      <Card className="glass-soft border-border-100">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <CardTitle className="text-lg">All Testimonials</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input
                type="text"
                placeholder="Search testimonials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-card-700 border border-border-100 text-sm rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-4 bg-card-700/50 rounded-xl border border-border-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-text-secondary">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="w-7 h-7">
                        <Eye size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-7 h-7 text-primary-400" onClick={() => handleEdit(testimonial)}>
                        <Edit size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-7 h-7 text-red-400" onClick={() => handleDelete(testimonial.id)}>
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-primary-500 fill-primary-500" : "text-text-tertiary"}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary line-clamp-3">{testimonial.content}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card-800 border border-border-100 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border-100 flex items-center justify-between">
              <h2 className="text-xl font-bold">{editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </Button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea
                  rows={4}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  required
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit">Save Testimonial</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsAdminPage;
