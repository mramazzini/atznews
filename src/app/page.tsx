import August from "@/components/August";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="p-0  md:p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <August />
      </Suspense>
    </main>
  );
}
