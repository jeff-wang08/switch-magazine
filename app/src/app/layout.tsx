import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Switch Magazine | Career Training Match",
  description: "Get matched with California career training programs and selected education partners.",
};

const navItems = [
  { label: "Programs", href: "/programs" },
  { label: "Funding", href: "/funding" },
  { label: "For Providers", href: "/providers" },
  { label: "Apply", href: "/apply" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-black/15 bg-[#fffdfa]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <Link className="font-serifDisplay text-3xl font-black leading-none tracking-tight sm:text-4xl" href="/">
              Switch
              <span className="ml-2 text-mutedRed">Magazine</span>
            </Link>
            <nav className="flex flex-wrap gap-2 text-sm font-semibold">
              {navItems.map((item) => (
                <Link key={item.href} className="rounded-full border border-black/15 bg-white/70 px-4 py-2 transition hover:border-black hover:bg-ink hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-black/15 bg-[#fffdfa]">
          <div className="mx-auto grid max-w-6xl gap-5 px-6 py-8 text-sm leading-6 text-black/65 sm:grid-cols-3">
            <p>Switch Magazine is a matching and referral service, not a school.</p>
            <p>Partner with us: partners@switchmagazine.com</p>
            <p>Program terms are set by independent education partners.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
