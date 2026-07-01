"use client";
import React, { useState, useEffect } from "react";
import { Search, Loader2, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { OrderType } from "@/types";
import { Button } from "@/components/ui/button";

const OrdersAdminPage: React.FC = () => {
  const { db } = useAuth();
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchOrders = async () => {
    if (!db) return;
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as OrderType[];
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [db]);

  const updateOrderStatus = async (id: string, status: OrderType["status"]) => {
    if (!db) return;
    try {
      const orderRef = doc(db, "orders", id);
      await updateDoc(orderRef, { status, updatedAt: new Date() });
      fetchOrders();
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(search.toLowerCase()) ||
    order.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Orders</h1>
          <p className="text-text-secondary">Manage customer orders</p>
        </div>
      </div>

      <Card className="glass-soft border-border-100">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <CardTitle className="text-lg">All Orders</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input
                type="text"
                placeholder="Search orders..."
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
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div key={order.id} className="p-4 bg-card-700/50 rounded-xl border border-border-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                      {order.status === "completed" ? (
                        <CheckCircle size={24} />
                      ) : order.status === "cancelled" ? (
                        <XCircle size={24} />
                      ) : (
                        <Clock size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">Order #{order.id}</h3>
                      <p className="text-sm text-text-secondary">{order.customerName} - {order.productName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold text-lg">{order.amount}</p>
                      <p className="text-xs text-text-tertiary">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === "completed"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : order.status === "processing"
                            ? "bg-amber-500/10 text-amber-400"
                            : order.status === "cancelled"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {order.status.toUpperCase()}
                      </span>
                      <div className="flex gap-1">
                        {order.status !== "pending" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-7 h-7 text-blue-400"
                            onClick={() => updateOrderStatus(order.id, "pending")}
                          >
                            <Clock size={14} />
                          </Button>
                        )}
                        {order.status !== "processing" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-7 h-7 text-amber-400"
                            onClick={() => updateOrderStatus(order.id, "processing")}
                          >
                            <Clock size={14} />
                          </Button>
                        )}
                        {order.status !== "completed" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-7 h-7 text-emerald-400"
                            onClick={() => updateOrderStatus(order.id, "completed")}
                          >
                            <CheckCircle size={14} />
                          </Button>
                        )}
                        {order.status !== "cancelled" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-7 h-7 text-red-400"
                            onClick={() => updateOrderStatus(order.id, "cancelled")}
                          >
                            <XCircle size={14} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersAdminPage;
