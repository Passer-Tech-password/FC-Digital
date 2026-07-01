"use client";
import React, { useState, useEffect } from "react";
import { Search, Loader2, CheckCircle, XCircle, Trash2, Eye, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { MessageType } from "@/types";
import { Button } from "@/components/ui/button";

const MessagesAdminPage: React.FC = () => {
  const { db } = useAuth();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchMessages = async () => {
    if (!db) return;
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const messagesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as MessageType[];
      setMessages(messagesData);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [db]);

  const markAsRead = async (id: string, read: boolean) => {
    if (!db) return;
    try {
      const messageRef = doc(db, "messages", id);
      await updateDoc(messageRef, { read, updatedAt: new Date() });
      fetchMessages();
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!db || !confirm("Are you sure you want to delete this message?")) return;
    try {
      await deleteDoc(doc(db, "messages", id));
      fetchMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const filteredMessages = messages.filter((message) =>
    message.name.toLowerCase().includes(search.toLowerCase()) ||
    message.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Messages</h1>
          <p className="text-text-secondary">Manage customer inquiries and messages</p>
        </div>
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
              {filteredMessages.map((message) => (
                <div key={message.id} className={`p-4 rounded-xl border border-border-100 ${message.read ? "bg-card-700/30" : "bg-card-700/70"}`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${message.read ? "bg-card-800" : "bg-primary-500/10 text-primary-500"}`}>
                        {message.read ? <CheckCircle size={24} className="text-text-tertiary" /> : <Mail size={24} />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{message.name}</h3>
                          {!message.read && <span className="w-2 h-2 rounded-full bg-primary-500" />}
                        </div>
                        <p className="text-sm text-text-secondary">{message.subject}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-text-tertiary">
                          <span className="flex items-center gap-1">
                            <Mail size={12} />
                            {message.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone size={12} />
                            {message.phone}
                          </span>
                          <span>{new Date(message.createdAt).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8"
                        onClick={() => markAsRead(message.id, !message.read)}
                      >
                        {message.read ? <XCircle size={16} /> : <CheckCircle size={16} />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 text-red-400"
                        onClick={() => deleteMessage(message.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-text-secondary">{message.message}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagesAdminPage;
