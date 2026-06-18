"use client";

import { useEffect } from "react";
import { io } from "socket.io-client";
import { useQueryClient, QueryKey } from "@tanstack/react-query";

interface UseSocketQueryOptions<TData> {
  eventName: string;
  queryKey: QueryKey;
  updater?: (oldData: TData | undefined, newData: any) => TData;
}

export function useSocketQuery<TData>({
  eventName,
  queryKey,
  updater,
}: UseSocketQueryOptions<TData>) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL!, {
      transports: ["websocket"],
    });

    const handleData = (newData: any) => {
      queryClient.setQueryData<TData>(queryKey, (oldData) => {
        if (updater) {
          return updater(oldData, newData);
        }

        return newData;
      });
    };

    socket.on(eventName, handleData);

    return () => {
      socket.off(eventName, handleData);
      socket.disconnect();
    };
  }, [eventName, queryClient, queryKey, updater]);
}
