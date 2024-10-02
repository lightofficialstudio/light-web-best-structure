"use client";
import "@styles/font.css"; // Import font styles
import "@styles/globals.css"; // Import global styles
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react"; // นำเข้า SessionProvider จาก next-auth
import { StoreProvider } from "@stores/store-provider";
import React from "react";
import { registerServiceWorker } from "@services/progressive-web-app"; // นำเข้าฟังก์ชัน registerServiceWorker จากไฟล์ web-progressive-app.ts

export default function RootLayout({
  children,
  params: { locale }, // locale params passed to the layout
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [hydrated, setHydrated] = React.useState(false);
  // Service Worker registration inside useEffect to run only on the client side
  useEffect(() => {
    registerServiceWorker();
  }, []);

  // Hydration: รอให้ Client ทำงานแล้วจึงแสดงผล
  useEffect(() => {
    setHydrated(true); // เปิดการแสดงผลเมื่อ Client พร้อมแล้ว
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <html lang={locale || "en"}>
      <head>
        {/* Meta tags for Progressive Web App (PWA) */}
        <meta name="application-name" content="My Web App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="My Web App" />
        <meta name="description" content="This is my awesome web app." />
        <meta name="theme-color" content="#4A90E2" />

        {/* Link to manifest.json */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" href="/icons/icon-512x512.png" sizes="512x512" />
      </head>
      <body className="antialiased">
        <StoreProvider>
          <SessionProvider>{children}</SessionProvider>{" "}
        </StoreProvider>
      </body>
    </html>
  );
}
