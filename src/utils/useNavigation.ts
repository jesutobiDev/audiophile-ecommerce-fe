'use client'
import { useRouter } from "next/navigation";

export const useNavigateToProductPage = (productId:string) => {
  const router = useRouter();

  return () => {
    router.push(`/${productId}`);
  };
};
