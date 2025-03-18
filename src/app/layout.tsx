import { Suspense } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading ...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
