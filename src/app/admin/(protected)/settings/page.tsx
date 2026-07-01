"use client";
import React, { useState, useEffect } from "react";
import { Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { SettingsType } from "@/types";

const SettingsAdminPage: React.FC = () => {
  const { db } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<Partial<SettingsType>>({
    companyName: "FC DIGITAL TECHNOLOGIES",
    emailAddress: "info@fcdigital.com",
    phoneNumber: "+234 803 123 4567",
    address: "123 Tech Plaza, Lagos, Nigeria",
    facebookURL: "",
    twitterURL: "",
    instagramURL: "",
    linkedinURL: "",
  });
  const [settingsId, setSettingsId] = useState<string | null>(null);

  const fetchSettings = async () => {
    if (!db) return;
    try {
      const querySnapshot = await getDocs(collection(db, "settings"));
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setSettingsId(doc.id);
        setSettings(doc.data() as Partial<SettingsType>);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, [db]);

  const saveSettings = async () => {
    if (!db) return;
    setSaving(true);
    try {
      if (settingsId) {
        const settingsRef = doc(db, "settings", settingsId);
        await updateDoc(settingsRef, {
          ...settings,
          updatedAt: Timestamp.now(),
        });
      } else {
        const docRef = await addDoc(collection(db, "settings"), {
          ...settings,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });
        setSettingsId(docRef.id);
      }
      alert("Settings saved successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Settings</h1>
        <p className="text-text-secondary">Configure your admin dashboard and website</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-soft border-border-100">
          <CardHeader>
            <CardTitle className="text-lg">General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={settings.emailAddress}
                onChange={(e) => setSettings({ ...settings, emailAddress: e.target.value })}
                className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={settings.phoneNumber}
                onChange={(e) => setSettings({ ...settings, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <textarea
                rows={3}
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-soft border-border-100">
          <CardHeader>
            <CardTitle className="text-lg">Social Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Facebook URL</label>
              <input
                type="url"
                placeholder="https://facebook.com/fcdigital"
                value={settings.facebookURL}
                onChange={(e) => setSettings({ ...settings, facebookURL: e.target.value })}
                className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Twitter URL</label>
              <input
                type="url"
                placeholder="https://twitter.com/fcdigital"
                value={settings.twitterURL}
                onChange={(e) => setSettings({ ...settings, twitterURL: e.target.value })}
                className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Instagram URL</label>
              <input
                type="url"
                placeholder="https://instagram.com/fcdigital"
                value={settings.instagramURL}
                onChange={(e) => setSettings({ ...settings, instagramURL: e.target.value })}
                className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
              <input
                type="url"
                placeholder="https://linkedin.com/company/fcdigital"
                value={settings.linkedinURL}
                onChange={(e) => setSettings({ ...settings, linkedinURL: e.target.value })}
                className="w-full px-4 py-3 bg-card-700 border border-border-100 rounded-xl text-white focus:outline-none focus:border-primary-500"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button size="lg" onClick={saveSettings} disabled={saving} className="bg-primary-500 hover:bg-primary-600">
          {saving ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Saving...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Save size={20} />
              Save Changes
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SettingsAdminPage;
