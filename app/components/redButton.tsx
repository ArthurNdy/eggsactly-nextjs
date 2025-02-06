import Link from "next/link";

export function RedButton({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href}>
      <button
        className="
        bg-red-500 hover:bg-red-500 active:bg-red-500
        text-white font-bold py-4 px-8
        rounded-full 
        shadow-[0_6px_0_0_#c53030,0_12px_0_0_#742a2a]
        border-b-[3px] border-red-700
        transform translate-y-[-4px]
        transition-all duration-150
        hover:translate-y-[-2px]
        hover:shadow-[0_4px_0_0_#c53030,0_8px_0_0_#742a2a]
        active:translate-y-[0px]
        active:shadow-[0_0px_0_0_#c53030,0_0px_0_0_#742a2a]
        active:border-b-[0px]
        active:animate-push
      "
      >
        {text}
      </button>
    </Link>
  );
}
