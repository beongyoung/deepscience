import { useState, useEffect } from "react";
import axios from "axios";

const secretKey = import.meta.env.VITE_DART_SECRET_KEY;

async function fetchDart() {
  try {
    const response = await axios.get(`/api/company.json`, {
      params: {
        crtfc_key: secretKey,
        corp_code: "00126380",
      },
      withCredentials: true,
    });

    // Axios automatically throws an error for non-2xx responses
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching Dart:", error);
    return [];
  }
}

export default function useFetchDart() {
  const [dart, setDart] = useState([]);

  useEffect(() => {
    async function getDart() {
      const data = await fetchDart();
      setDart(data);
    }
    getDart();
  }, []);

  return dart;
}
