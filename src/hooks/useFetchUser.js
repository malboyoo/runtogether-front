import { useEffect, useState } from "react";
import { fetchUser } from "../api/users";

export function useFetchUser(id) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;
    async function fetchSingleUser(id) {
      try {
        setUser(await fetchUser(id));
      } catch (error) {
        console.log("Erreur lors du téléchargement de l'évenement:", error);
      } finally {
        if (!cancel) {
          setLoading(false);
        }
      }
    }
    if (id) {
      fetchSingleUser(id);
    }
    return () => (cancel = true);
  }, [id]);

  return [user, loading];
}
