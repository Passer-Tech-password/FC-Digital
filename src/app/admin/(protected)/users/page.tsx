"use client";
import React, { useState, useEffect } from "react";
import { Plus, Search, Loader2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { collection, getDocs } from "firebase/firestore";

const UsersAdminPage: React.FC = () => {
  const { db, user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    if (!db) return;
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [db]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Users</h1>
          <p className="text-text-secondary">Manage admin and customer users</p>
        </div>
        <Button>
          <Plus size={20} className="mr-2" />
          Add New User
        </Button>
      </div>

      <Card className="glass-soft border-border-100">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <CardTitle className="text-lg">All Users</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input
                type="text"
                placeholder="Search users..."
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
            <div className="space-y-4">
              {user && (
                <div className="flex items-center justify-between p-4 bg-card-800/50 rounded-xl border border-border-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{user.displayName || "Admin User"}</h3>
                      <p className="text-sm text-text-secondary">{user.email}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-400">
                    Admin
                  </span>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersAdminPage;
