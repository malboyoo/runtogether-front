import { useEffect, useState } from "react";
import { fetchEvent } from "../api/event";

export function useFetchSingleEvent(id) {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;
    async function fetchSingleEvent() {
      try {
        setEvent(await fetchEvent(id));
      } catch (error) {
        console.log("Erreur lors du téléchargement de l'évenement:", error);
      } finally {
        if (!cancel) {
          setLoading(false);
        }
      }
    }
    fetchSingleEvent();
    return () => (cancel = true);
  }, [id]);

  return [event, loading];
}
