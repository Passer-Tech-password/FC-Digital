"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Eye, Search, X, Loader2, Briefcase } from "lucide-react";
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
import { ServiceType } from "@/types";

const ServicesAdminPage: React.FC = () => {
  const { db } = useAuth();
  const [services, setServices] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceType | null>(null);
  const [formData, setFormData] = useState<Partial<ServiceType>>({
    title: "",
    description: "",
    icon: "Briefcase",
  });

  const fetchServices = async () => {
    if (!db) return;
    try {
      const querySnapshot = await getDocs(collection(db, "services"));
      const servicesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as ServiceType[];
      setServices(servicesData);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [db]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    try {
      if (editingService) {
        const serviceRef = doc(db, "services", editingService.id);
        await updateDoc(serviceRef, {
          ...formData,
          updatedAt: Timestamp.now(),
        });
      } else {
        await addDoc(collection(db, "services"), {
          ...formData,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });
      }
      setIsModalOpen(false);
      resetForm();
      fetchServices();
    } catch (error) {
      console.error("Error saving service:", error);
    }
  };

  const handleEdit = (service: ServiceType) => {
    setEditingService(service);
    setFormData(service);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!db || !confirm("Are you sure you want to delete this service?")) return;
    try {
      await deleteDoc(doc(db, "services", id));
      fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const resetForm = () => {
    setEditingService(null);
    setFormData({
      title: "",
      description: "",
      icon: "Briefcase",
    });
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase()) ||
    service.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Services</h1>
          <p className="text-text-secondary">Manage your service offerings</p>
        </div>
        <Button onClick={() => { resetForm(); setIsModalOpen(true); }}>
          <Plus size={20} className="mr-2" />
          Add New Service
        </Button>
      </div>

      <Card className="glass-soft border-border-100">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <CardTitle className="text-lg">All Services</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input
                type="text"
                placeholder="Search services..."
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((service) => (
                <div key={service.id} className="p-4 bg-card-700/50 rounded-xl border border-border-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="w-7 h-7">
                        <Eye size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-7 h-7 text-primary-400" onClick={() => handleEdit(service)}>
                        <Edit size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-7 h-7 text-red-400" onClick={() => handleDelete(service.id)}>
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-text-secondary line-clamp-2">{service.description}</p>
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
              <h2 className="text-xl font-bold">{editingService ? "Edit Service" : "Add New Service"}</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </Button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit">Save Service</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesAdminPage;
