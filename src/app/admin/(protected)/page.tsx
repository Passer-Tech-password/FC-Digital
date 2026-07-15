"use client";
import React, { useState, useEffect } from "react";
import {
  Package,
  Briefcase,
  ShoppingCart,
  MessageSquare,
  Users,
  TrendingUp,
  Bell,
  Search,
  User,
  Moon,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { collection, getDocs } from "firebase/firestore";

const DashboardPage: React.FC = () => {
  const { db, user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    products: 0,
    services: 0,
    orders: 0,
    messages: 0,
  });

  const fetchStats = async () => {
    if (!db) return;
    try {
      const [productsSnapshot, servicesSnapshot, ordersSnapshot, messagesSnapshot] = await Promise.all([
        getDocs(collection(db, "products")),
        getDocs(collection(db, "services")),
        getDocs(collection(db, "orders")),
        getDocs(collection(db, "messages")),
      ]);
      setStats({
        products: productsSnapshot.size,
        services: servicesSnapshot.size,
        orders: ordersSnapshot.size,
        messages: messagesSnapshot.size,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [db]);

  const statItems = [
    {
      label: "Total Products",
      value: stats.products.toString(),
      icon: Package,
      change: "+12.5% this month",
      color: "text-orange-500 bg-orange-500/10",
    },
    {
      label: "Total Services",
      value: stats.services.toString(),
      icon: Briefcase,
      change: "+8.3% this month",
      color: "text-purple-500 bg-purple-500/10",
    },
    {
      label: "Total Orders",
      value: stats.orders.toString(),
      icon: ShoppingCart,
      change: "+18.2% this month",
      color: "text-green-500 bg-green-500/10",
    },
    {
      label: "Total Messages",
      value: stats.messages.toString(),
      icon: MessageSquare,
      change: "+5.5% this month",
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      label: "Total Visitors",
      value: "2,547",
      icon: Users,
      change: "+22.5% this month",
      color: "text-orange-500 bg-orange-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-text-secondary">
            Welcome back, {user?.displayName || "Admin"} 👋
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2 rounded-xl bg-card-800 border border-border-100 text-sm text-white placeholder-text-tertiary focus:outline-none focus:border-primary-500 transition-all"
            />
          </div>
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Moon size={20} />
          </Button>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-300 flex items-center justify-center font-semibold">
              {user?.displayName ? user.displayName.charAt(0) : <User size={16} />}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">{user?.displayName || "Admin User"}</p>
              <p className="text-xs text-text-tertiary">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {statItems.map((stat, index) => (
              <Card key={index} className="glass-soft border-border-100">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`${stat.color} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center`}>
                      <stat.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                      <TrendingUp size={12} className="sm:w-3.5 sm:h-3.5" /> {stat.change}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-xs sm:text-sm text-text-secondary">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="glass-soft border-border-100 lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Visitors Overview</CardTitle>
                  <select className="bg-card-700 border border-border-100 text-sm px-3 py-1.5 rounded-lg">
                    <option>This Month</option>
                    <option>This Week</option>
                    <option>This Year</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-b from-card-800 to-background-950 rounded-xl border border-border-100 flex items-center justify-center">
                  <div className="text-center text-text-tertiary">
                    <div className="text-6xl mb-4">📊</div>
                    <p>Chart will render with actual data</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-soft border-border-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Traffic Source</CardTitle>
                  <select className="bg-card-700 border border-border-100 text-sm px-3 py-1.5 rounded-lg">
                    <option>This Month</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-40 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full border-8 border-primary-500/30 relative flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold">2,547</div>
                      <div className="text-xs text-text-tertiary">Visitors</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Direct", percentage: 45, color: "bg-primary-500" },
                    { label: "Organic Search", percentage: 30, color: "bg-blue-500" },
                    { label: "Social Media", percentage: 15, color: "bg-purple-500" },
                    { label: "Referral", percentage: 10, color: "bg-green-500" },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="text-text-secondary">{item.label}</span>
                        <span className="font-medium">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-card-700 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="glass-soft border-border-100 lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Recent Orders</CardTitle>
                  <Button variant="ghost" className="text-primary-400 text-sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { id: "ORD-00124", customer: "John Doe", product: "HP EliteBook 840 G7", amount: "₦450,000", status: "Completed" },
                    { id: "ORD-00123", customer: "Jane Smith", product: "Dell Latitude 7430", amount: "₦380,000", status: "Processing" },
                    { id: "ORD-00122", customer: "Michael Brown", product: "TP-Link Archer C6", amount: "₦35,000", status: "Completed" },
                    { id: "ORD-00121", customer: "Sarah Wilson", product: "Kingston 1TB SSD", amount: "₦60,000", status: "Pending" },
                    { id: "ORD-00120", customer: "David Johnson", product: "Lenovo ThinkPad T14", amount: "₦420,000", status: "Cancelled" },
                  ].map((order, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-card-800/50 rounded-xl border border-border-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-300 flex items-center justify-center text-xs font-bold">
                          {order.customer.split(" ")[0][0]}
                          {order.customer.split(" ")[1][0]}
                        </div>
                        <div className="hidden sm:block">
                          <p className="font-medium text-sm">{order.id}</p>
                          <p className="text-xs text-text-tertiary">{order.customer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{order.product}</p>
                        <p className="text-xs text-text-tertiary">{order.amount}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" :
                        order.status === "Processing" ? "bg-amber-500/10 text-amber-400" :
                        order.status === "Pending" ? "bg-blue-500/10 text-blue-400" :
                        "bg-red-500/10 text-red-400"
                      }`}>
                        {order.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-soft border-border-100">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Recent Messages</CardTitle>
                  <Button variant="ghost" className="text-primary-400 text-sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Alex Thompson", subject: "Need help with my laptop...", time: "2m ago", avatar: "AT" },
                    { name: "Maria Garcia", subject: "I have a question for...", time: "15m ago", avatar: "MG" },
                    { name: "James Wilson", subject: "Do you offer network installation?", time: "1h ago", avatar: "JW" },
                    { name: "Lisa Anderson", subject: "What are your business hours?", time: "2h ago", avatar: "LA" },
                    { name: "Robert Davis", subject: "I'm interested in your services...", time: "3h ago", avatar: "RD" },
                  ].map((msg, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-card-800/50 rounded-xl border border-border-100">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-300 flex items-center justify-center text-xs font-bold">
                        {msg.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium truncate">{msg.name}</p>
                          <span className="text-xs text-text-tertiary">{msg.time}</span>
                        </div>
                        <p className="text-xs text-text-secondary truncate">{msg.subject}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-1"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
