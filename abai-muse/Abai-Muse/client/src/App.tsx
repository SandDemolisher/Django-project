import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BookOfWords from "@/pages/book-of-words";
import IranGaiyp from "@/pages/iran-gaiyp";
import Tests from "@/pages/tests";
import NotFound from "@/pages/not-found";

import AbaiTanu from "@/pages/abai_tanu";
import TolyqAdam from "@/pages/tolyq_adam";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/book-of-words" component={BookOfWords} />
      <Route path="/iran-gaiyp" component={IranGaiyp} />
      <Route path="/abai_tanu" component={AbaiTanu} />
      <Route path="/tolyq_adam" component={TolyqAdam} />
      <Route path="/tests" component={Tests} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
