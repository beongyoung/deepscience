import { useState, useEffect } from "react";
import axios from "axios";

const crtfc_key = import.meta.env.VITE_DART_SECRET_KEY;

async function fetchDart() {
  try {
    const response = await axios.get(
      `https://opendart.fss.or.kr/api/company.json?crtfc_key=${crtfc_key}&corp_code=00126380`
    );

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
