"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push('/dashboard');
  return (

    <div>
      
    </div>
  );
}
