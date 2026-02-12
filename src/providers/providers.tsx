import { TooltipProvider } from "@/components/ui/tooltip";
import { PropsWithChildren } from "react";
import LoadedStateProvider from "./loading-state-provider";
import ParallaxProvider from "./parallax-provider";
import TanstackProviders from "./tanstack-provider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <TanstackProviders>
      <TooltipProvider>
        <LoadedStateProvider>
          <ParallaxProvider>{children}</ParallaxProvider>
        </LoadedStateProvider>
      </TooltipProvider>
    </TanstackProviders>
  );
}
