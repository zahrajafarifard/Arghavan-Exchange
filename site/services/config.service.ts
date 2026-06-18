import { apiFetch } from "@/lib/api";

export const getConfig = () => {
  return apiFetch("/api/getConfig");
};
