"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Eye, Search, X, Loader2, FileText } from "lucide-react";
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
import { BlogPostType } from "@/types";

const BlogAdminPage: React.FC = () => {
  const { db } = useAuth();
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostType | null>(null);
  const [formData, setFormData] = useState<Partial<BlogPostType>>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    featuredImage: "",
    published: true,
  });

  const fetchPosts = async () => {
    if (!db) return;
    try {
      const querySnapshot = await getDocs(collection(db, "blog"));
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as BlogPostType[];
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [db]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    try {
      if (editingPost) {
        const postRef = doc(db, "blog", editingPost.id);
        await updateDoc(postRef, {
          ...formData,
          updatedAt: Timestamp.now(),
        });
      } else {
        await addDoc(collection(db, "blog"), {
          ...formData,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });
      }
      setIsModalOpen(false);
      resetForm();
      fetchPosts();
    } catch (error) {
      console.error("Error saving blog post:", error);
    }
  };

  const handleEdit = (post: BlogPostType) => {
    setEditingPost(post);
    setFormData(post);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!db || !confirm("Are you sure you want to delete this blog post?")) return;
    try {
      await deleteDoc(doc(db, "blog", id));
      fetchPosts();
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  const resetForm = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      author: "",
      featuredImage: "",
      published: true,
    });
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Blog Posts</h1>
          <p className="text-text-secondary">Manage your blog content</p>
        </div>
        <Button onClick={() => { resetForm(); setIsModalOpen(true); }}>
          <Plus size={20} className="mr-2" />
          Add New Post
        </Button>
      </div>

      <Card className="glass-soft border-border-100">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <CardTitle className="text-lg">All Posts</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input
                type="text"
                placeholder="Search posts..."
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
            <div className="space-y-3">
              {filteredPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 bg-card-700/50 rounded-xl border border-border-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-card-700 to-background-950 border border-border-100 flex items-center justify-center text-2xl">
                      <FileText size={28} className="text-text-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-text-secondary">Published on {new Date(post.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 text-primary-400" onClick={() => handleEdit(post)}>
                      <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 text-red-400" onClick={() => handleDelete(post.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card-800 border border-border-100 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border-100 flex items-center justify-between">
              <h2 className="text-xl font-bold">{editingPost ? "Edit Post" : "Add New Post"}</h2>
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Author</label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Excerpt</label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Published</span>
                </label>
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit">Save Post</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAdminPage;
