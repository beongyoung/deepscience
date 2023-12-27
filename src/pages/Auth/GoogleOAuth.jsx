import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuthCode, setAuthUser } from "../../redux/authAction";
import fetchGetUser from "../../hooks/fetch/fetchGetUser";
import Home from "../Home/Home";

function GoogleOAuth() {
  const location = useLocation();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
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
            if (localStorage.getItem("authUser"))
              alert(`${user.data.name}님 환영합니다!`);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch, location.search, Navigate]);

  return (
    <div>
      <Home />
    </div>
  );
}

export default GoogleOAuth;
