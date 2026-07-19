import type { Metadata } from "next";
import { Suspense } from "react";
import ComingSoonContent from "./coming-soon-content";

export const metadata: Metadata = {
  title: "Coming Soon — DevProFlow Lumina",
  description: "This product is under active development. Stay tuned for updates.",
};

export default function ComingSoonPage() {
  return (
    <Suspense fallback={null}>
      <ComingSoonContent />
    </Suspense>
  );
}
