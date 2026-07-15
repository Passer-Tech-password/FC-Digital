"use client";
import React from "react";
import {
  LayoutDashboard,
  Package,
  Briefcase,
  FolderKanban,
  FileText,
  ShoppingCart,
  MessageSquare,
  Star,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/products", icon: Package, label: "Products" },
  { href: "/admin/services", icon: Briefcase, label: "Services" },
  { href: "/admin/portfolio", icon: FolderKanban, label: "Portfolio" },
  { href: "/admin/blog", icon: FileText, label: "Blog Posts" },
  { href: "/admin/orders", icon: ShoppingCart, label: "Orders" },
  { href: "/admin/messages", icon: MessageSquare, label: "Messages" },
  { href: "/admin/testimonials", icon: Star, label: "Testimonials" },
  { href: "/admin/users", icon: Users, label: "Users" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const pathname = usePathname();
  const { auth } = useAuth();

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
      window.location.href = "/admin/login";
    }
  };

  const sidebarContent = (
    <div className="w-64 h-full glass border-r border-border-100 flex flex-col">
      <div className="p-6 border-b border-border-100 flex items-center justify-between">
        <Link href="/admin" onClick={onClose} className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl gradient-primary shadow-glow-orange-sm flex items-center justify-center font-bold text-xl">
            FC
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight">FC DIGITAL</span>
            <span className="text-[10px] text-text-tertiary uppercase tracking-[0.3em]">
              ADMIN DASHBOARD
            </span>
          </div>
        </Link>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X size={20} />
          </Button>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-primary-500/10 text-primary-500 border border-primary-500/20"
                  : "text-text-secondary hover:bg-card-700 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border-100">
        <div className="space-y-2">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:bg-card-700 hover:text-white transition-all"
          >
            <LayoutDashboard size={20} />
            <span className="font-medium text-sm">View Website</span>
          </Link>
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="w-full justify-start gap-3"
          >
            <LogOut size={20} />
            <span className="font-medium text-sm">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      {onClose && (
        <div className={`fixed inset-y-0 left-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          {sidebarContent}
        </div>
      )}

      {/* Mobile Overlay */}
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};
