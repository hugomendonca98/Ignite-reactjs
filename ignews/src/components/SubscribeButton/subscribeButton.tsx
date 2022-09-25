import { signIn, useSession } from "next-auth/react";
import { useCallback } from "react";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  const handleSubscribe = useCallback(() => {
    if (!session) {
      signIn("github");
      return;
    }
  }, [session]);

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
