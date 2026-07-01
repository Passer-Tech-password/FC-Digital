"use client";
import React from "react";
import { Plus, Edit, Trash2, Eye, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogAdminPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Blog Posts</h1>
          <p className="text-text-secondary">Manage your blog content</p>
        </div>
        <Button>
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
                className="pl-10 pr-4 py-2 bg-card-700 border border-border-100 text-sm rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-card-700/50 rounded-xl border border-border-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-card-700 to-background-950 border border-border-100 flex items-center justify-center text-2xl">
                    <FileText size={28} className="text-text-tertiary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Blog Post {i}</h3>
                    <p className="text-sm text-text-secondary">Published on {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
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
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogAdminPage;
