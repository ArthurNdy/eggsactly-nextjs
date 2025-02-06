import Image from "next/image";
import { RedButton } from "./components/redButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">Eggsactly</h1>
        <h2 className="text-xl sm:text-2xl italic text-gray-700">
          (or how to get your eggs right every time)
        </h2>

        <Image
          src="/floatingEgg.gif"
          alt="Cracked Egg Animation"
          width={180}
          height={180}
          priority
          className="my-8"
          unoptimized
        />

        <div className="mt-8">
          <RedButton href="/recipes" text="Let's go" />
        </div>
      </main>
    </div>
  );
}
