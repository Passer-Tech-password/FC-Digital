"use client";
import React from "react";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsAdminPage: React.FC = () => {
  const products = [
    {
      id: "1",
      title: "HP EliteBook 840 G7",
      category: "Laptops",
      price: "₦450,000",
      featured: true,
      available: true,
      inventory: 15,
    },
    {
      id: "2",
      title: "Dell Latitude 7430",
      category: "Laptops",
      price: "₦380,000",
      featured: false,
      available: true,
      inventory: 8,
    },
    {
      id: "3",
      title: "TP-Link Archer C6",
      category: "Accessories",
      price: "₦35,000",
      featured: false,
      available: false,
      inventory: 0,
    },
    {
      id: "4",
      title: "Kingston 1TB SSD",
      category: "Storage",
      price: "₦60,000",
      featured: true,
      available: true,
      inventory: 24,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Products</h1>
          <p className="text-text-secondary">Manage your product inventory</p>
        </div>
        <Button>
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
                className="pl-10 pr-4 py-2 bg-card-700 border border-border-100 text-sm rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
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
                {products.map((product) => (
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
                        <Button variant="ghost" size="icon" className="w-8 h-8 text-primary-400">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8 text-red-400">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsAdminPage;
