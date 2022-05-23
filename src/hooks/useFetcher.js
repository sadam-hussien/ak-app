import { useEffect, useState } from "react";

import { Alert, AlertToast } from "../components/global";

export default function useFetcher({ callback, id = null }) {
  const [fetchLoading, setFetchLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fetchItems, setFetchItems] = useState([]);
  const fetchAgain = () => {
    setFetchLoading(!fetchLoading);
  };

  useEffect(() => {
    callback({ id })
      .then((res) => {
        setFetchItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        Alert("error", "error ocured, please try again later", "ok", false);
        setLoading(false);
      });
  }, [fetchLoading, callback, id]);
  return { fetchAgain, fetchItems, loading };
}
