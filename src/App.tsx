import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PG from "./pages/PG";
import PGRoomType from "./pages/PGRoomType";
import Hostel from "./pages/Hostel";
import Contact from "./pages/Contact";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";
import SellItems from "./pages/SellItems";
import ItemDetail from "./pages/ItemDetail";
import Copyright from "./pages/Copyright";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { ScrollToTop } from "./components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
              <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/pg" element={<PG />} />
          <Route path="/pg/:type" element={<PGRoomType />} />
          <Route path="/pg/:type/:slug" element={<PropertyDetail />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/hostel/:slug" element={<PropertyDetail />} />
         <Route path="/other" element={<SellItems />} />
<Route path="/other/:slug" element={<ItemDetail />} />

{/* <Route path="/sell" element={<SellItems />} />
<Route path="/sell/:slug" element={<ItemDetail />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
