"use client";
import { createContext, useContext, useState } from "react";

interface LoadingStateContextType {
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoadedStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  return (
    <LoadedStateContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadedStateContext.Provider>
  );
}

export const LoadedStateContext = createContext<
  LoadingStateContextType | undefined
>(undefined);

export const useLoadedState = () => {
  const isLoading = useContext(LoadedStateContext);

  if (isLoading === undefined) {
    throw new Error(
      "useLoadingState must be used within a LoadingStateProvider",
    );
  }
  return isLoading;
};
