import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background">
      <Header />
      <main className="w-full pt-16 flex-1 relative">
        <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none -z-10" />
        {children}
      </main>
      <Footer />
    </div>
  );
}
