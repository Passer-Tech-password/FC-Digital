"use client";
import React from "react";
import "@/app/globals.css";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background-950 flex">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
