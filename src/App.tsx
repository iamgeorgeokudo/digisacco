
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import BoardMembers from "./pages/BoardMembers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import MediaGallery from "./pages/MediaGallery";
import MediaDownloads from "./pages/MediaDownloads";
import Tenders from "./pages/Tenders";
import Careers from "./pages/Careers";
import Elections from "./pages/Elections";
import FloatingAdverts from "./components/FloatingAdverts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/delegates-2015-2022" element={<BoardMembers />} />
          <Route path="/delegates-2022-2023" element={<BoardMembers />} />
          <Route path="/delegates-2024" element={<BoardMembers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/media/gallery" element={<MediaGallery />} />
          <Route path="/media/downloads" element={<MediaDownloads />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingAdverts />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
