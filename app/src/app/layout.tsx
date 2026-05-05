import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Switch Magazine",
  description: "Find training programs, apprenticeships, and hiring partners.",
};

const navItems = [
  "Programs",
  "Cities",
  "Hiring Now",
  "Salaries",
  "For Students",
  "For Employers",
  "For Schools",
  "Guides",
  "Search",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-black/15 bg-paper">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4">
            <p className="font-serifDisplay text-2xl font-bold">Switch Magazine</p>
            <nav className="flex flex-wrap gap-2 text-sm">
              {navItems.map((item) => (
                <a key={item} className="rounded-full border border-black/10 px-3 py-1 hover:bg-black/5" href="#">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-black/15 bg-white">
          <div className="mx-auto grid max-w-6xl gap-2 px-6 py-8 text-sm text-black/70 sm:grid-cols-3">
            <p>About</p>
            <p>Partner with us</p>
            <p>Contact • Newsletter</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
