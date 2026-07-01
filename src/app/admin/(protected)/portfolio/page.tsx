"use client";
import React from "react";
import { Plus, Edit, Trash2, Eye, Search, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortfolioAdminPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Portfolio</h1>
          <p className="text-text-secondary">Manage your portfolio projects</p>
        </div>
        <Button>
          <Plus size={20} className="mr-2" />
          Add New Project
        </Button>
      </div>

      <Card className="glass-soft border-border-100">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <CardTitle className="text-lg">All Projects</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 bg-card-700 border border-border-100 text-sm rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-card-700/50 rounded-xl border border-border-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                    <FolderKanban size={24} />
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="w-7 h-7">
                      <Eye size={14} />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-7 h-7 text-primary-400">
                      <Edit size={14} />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-7 h-7 text-red-400">
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold mb-1">Project {i}</h3>
                <p className="text-sm text-text-secondary line-clamp-2">
                  Description of the project goes here...
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioAdminPage;
