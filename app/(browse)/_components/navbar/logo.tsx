import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
});

export const Logo = () => { 
  return (   
    <Link href={"/"}>
      <div className="hover:opacity-75 transition mr-4">
        <p className={cn("sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white", font.className)}>SHRWD</p>
      </div>
    </Link> 
  )
}