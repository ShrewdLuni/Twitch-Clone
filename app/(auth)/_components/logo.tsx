import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
});

export const Logo = () => { 
  return (    
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-pink-600 rounded-full px-6 py-4 mb-4">
        <p className={cn("text-xl font-bold text-white", font.className)}>shrwd</p>
      </div>
    </div>
  )
}