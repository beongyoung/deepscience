import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuthCode, setAuthUser } from "../../redux/authAction";
import fetchGetUser from "../../hooks/fetch/fetchGetUser";

function GoogleOAuth() {
  const location = useLocation();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const params = new URLSearchParams(location.search);
        const code = params.get("token");

        if (code) {
          const user = await fetchGetUser(code);
          dispatch(setAuthCode(code));

          if (user) {
            dispatch(setAuthUser(user));
            localStorage.setItem("authUser", JSON.stringify(user));
            Navigate("/");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [dispatch, location.search, Navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <h1>Google OAuth</h1>;
}

export default GoogleOAuth;
