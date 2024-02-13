"use client";

import { useState, useEffect } from "react";


import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { FollowingSkeleton } from "./following";

interface WrapperProps {
  children: React.ReactNode;
};

export const Wrapper = ({
  children,
}: WrapperProps) => {

  const [isClient, setIsClient] = useState(false)
  const { collapsed } = useSidebar((state) => state);
  
  useEffect(() => {
    setIsClient(true);
  }, [])

  return !isClient 
  ? (
    <aside className={cn("left-0 fixed flex flex-col h-full bg-background border-r z-50", collapsed ? "w-[70px]" : "w-60")}>
      <ToggleSkeleton/>
      <FollowingSkeleton/>
      <RecommendedSkeleton/>
    </aside>
  ) 
  : ( 
    <aside className={cn("left-0 fixed flex flex-col w-[70px] h-full bg-background border-r z-50", !collapsed && "w-60")}>
      {children}
    </aside>
  );
};