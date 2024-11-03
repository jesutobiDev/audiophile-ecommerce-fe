'use client'
import { useRouter } from "next/navigation";

export const useNavigateToProductPage = () => {
  const router = useRouter();

  return (productId: string) => {
    router.push(`/${productId}`);
  };
};
