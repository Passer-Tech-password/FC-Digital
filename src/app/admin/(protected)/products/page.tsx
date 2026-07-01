"use client";
import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
  Search,
  X,
  Loader2,
} from "lucide-react";
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
import { ProductType } from "@/types";

const ProductsAdminPage: React.FC = () => {
  const { db } = useAuth();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
  const [formData, setFormData] = useState<Partial<ProductType>>({
    title: "",
    category: "",
    price: "",
    description: "",
    images: [],
    featured: false,
    available: true,
    inventory: 0,
  });

  const fetchProducts = async () => {
    if (!db) return;
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as ProductType[];
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [db]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;

    try {
      if (editingProduct) {
        const productRef = doc(db, "products", editingProduct.id);
        await updateDoc(productRef, {
          ...formData,
          updatedAt: Timestamp.now(),
        });
      } else {
        await addDoc(collection(db, "products"), {
          ...formData,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });
      }
      setIsModalOpen(false);
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleEdit = (product: ProductType) => {
    setEditingProduct(product);
    setFormData(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!db || !confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const resetForm = () => {
    setEditingProduct(null);
    setFormData({
      title: "",
      category: "",
      price: "",
      description: "",
      images: [],
      featured: false,
      available: true,
      inventory: 0,
    });
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Products</h1>
          <p className="text-text-secondary">Manage your product inventory</p>
        </div>
        <Button onClick={() => { resetForm(); setIsModalOpen(true); }}>
          <Plus size={20} className="mr-2" />
          Add New Product
        </Button>
      </div>

      <Card className="glass-soft border-border-100">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <CardTitle className="text-lg">All Products</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input
                type="text"
                placeholder="Search products..."
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
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-100">
                    <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider pb-3">
                      Product
                    </th>
                    <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider pb-3">
                      Category
                    </th>
                    <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider pb-3">
                      Price
                    </th>
                    <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider pb-3">
                      Stock
                    </th>
                    <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider pb-3">
                      Status
                    </th>
                    <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider pb-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-100">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-card-700/30 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-card-700 to-background-950 border border-border-100 flex items-center justify-center text-2xl">
                            💻
                          </div>
                          <div>
                            <p className="text-sm font-medium">{product.title}</p>
                            {product.featured && (
                              <span className="text-xs text-primary-400 font-semibold">Featured</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-text-secondary">{product.category}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm font-bold gradient-text">{product.price}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-text-secondary">{product.inventory} in stock</span>
                      </td>
                      <td className="py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          product.available
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                        }`}>
                          {product.available ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                          {product.available ? "Available" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="w-8 h-8">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="icon" className="w-8 h-8 text-primary-400" onClick={() => handleEdit(product)}>
                            <Edit size={16} />
                          </Button>
                          <Button variant="ghost" size="icon" className="w-8 h-8 text-red-400" onClick={() => handleDelete(product.id)}>
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card-800 border border-border-100 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border-100 flex items-center justify-between">
              <h2 className="text-xl font-bold">{editingProduct ? "Edit Product" : "Add New Product"}</h2>
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
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Inventory</label>
                <input
                  type="number"
                  required
                  value={formData.inventory}
                  onChange={(e) => setFormData({ ...formData, inventory: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Featured</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.available}
                    onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Available</span>
                </label>
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit">Save Product</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsAdminPage;
