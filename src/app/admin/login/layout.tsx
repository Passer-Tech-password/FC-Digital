import React from "react";
import "@/app/globals.css";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background-950">{children}</div>;
}
