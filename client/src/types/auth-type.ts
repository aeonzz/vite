import { authClient } from "@/lib/auth-client";

export type Session = typeof authClient.$Infer.Session;

export type PayloadSession = {
  data: Session;
};
