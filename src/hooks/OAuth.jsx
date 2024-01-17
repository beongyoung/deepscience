const GOOGLE_REDIRECT_URL = import.meta.env.VITE_GOOGLE_REDIRECT_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export default function OAuth() {
  return { GOOGLE_REDIRECT_URL, ACCESS_TOKEN };
}
