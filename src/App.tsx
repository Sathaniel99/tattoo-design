import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTopButton from './components/ScrollToTopButton';
import { GlobalModalProvider } from "@/components/GlobalModalProvider";
import Gallery_total from "@/components/Gallery_total/Gallery_total";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <GlobalModalProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery_total />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTopButton />
        </HashRouter>
      </GlobalModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
