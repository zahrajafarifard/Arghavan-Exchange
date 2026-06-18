import { useQuery } from "@tanstack/react-query";
import { getConfig } from "@/services/config.service";

export const useConfig = () => {
  return useQuery({
    queryKey: ["config"],
    queryFn: getConfig,
  });
};
