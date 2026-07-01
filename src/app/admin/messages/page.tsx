"use client";
import React from "react";
import { MessageSquare, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MessagesAdminPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Messages</h1>
        <p className="text-text-secondary">Manage customer inquiries and messages</p>
      </div>

      <Card className="glass-soft border-border-100">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <CardTitle className="text-lg">All Messages</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-10 pr-4 py-2 bg-card-700 border border-border-100 text-sm rounded-xl text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-text-tertiary">
            <div className="text-center">
              <MessageSquare size={48} className="mx-auto mb-2" />
              <p>Messages will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagesAdminPage;
