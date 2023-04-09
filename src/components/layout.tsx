import { type PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Navigation } from "./navigation";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}


