import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageContent />
      </main>
      <Footer />
    </div>
  );
}
