import Hero from "@/components/hero";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <ModeToggle />
        <Hero />
      </div>
    </main>
  );
}
