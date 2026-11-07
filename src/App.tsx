import React, { Suspense } from "react";
import { Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/context/AuthContext";
import { ShopsProvider } from "@/context/ShopsContext";
import Admin from "@/pages/Admin";
import { Toaster as SonnerToaster } from "sonner";
import { Toaster as RadixToaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Loader2 } from "lucide-react";

function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground gap-3">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground font-medium">Loading StockFlow Admin Suite...</p>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <ShopsProvider>
            <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
              <Suspense fallback={<PageLoader />}>
                <Switch>
                  <Route path="/" component={Admin} />
                  <Route path="/admin" component={Admin} />
                  <Route path="/admin/:tab" component={Admin} />
                  <Route component={Admin} />
                </Switch>
              </Suspense>
              <SonnerToaster richColors position="top-right" />
              <RadixToaster />
            </div>
          </ShopsProvider>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
