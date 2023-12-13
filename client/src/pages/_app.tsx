import type { AppProps } from "next/app";
import React from "react";
import "@/styles/globals.css";
import StoreProvider from "@/providers/StoreProvider";
import AuthProvider from "@/providers/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </StoreProvider>
  );
}
