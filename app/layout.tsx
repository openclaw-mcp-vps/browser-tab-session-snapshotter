import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabSnap – Save and restore exact browser sessions instantly",
  description: "Create named snapshots of all open tabs, forms, and scroll positions for instant restoration. Built for web developers and QA testers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="38f6d34c-abf2-49a3-affe-50d464d43ecd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
