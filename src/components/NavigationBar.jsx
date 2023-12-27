import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "styled-components";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logoutUser } from "../redux/authAction";

const NavWrapper = styles.nav`
  position: relative;
  z-index: 25;
  width: 100%;
  height: 120px;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`;

const Nav = styles.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styles.div`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $active }) => ($active ? "#8ae7ec" : "#000000")};
  &:hover {
    font-weight: 700;
  }
`;

const LogoImg = styles.img`
  width: 150px;
  height: 75px;
  object-fit: contain;
`;

const LoginWrapper = styles.div`
  display: flex;
  gap: 5px;
  color: #000000;
`;

function NavigationBar() {
  const dispatch = useDispatch();
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);
  const authUserString = localStorage.getItem("authUser");
  const authUser = authUserString ? JSON.parse(authUserString) : null;

  useEffect(() => {
    try {
      if (authUser?.data) {
        toast.info(`${authUser.data.name}님 환영합니다!`);
        setShowWelcomeAlert(true);
      }
    } catch (error) {
      console.error("Error parsing authUser:", error);
    }
  }, [authUser]);

  useEffect(() => {
    if (authUser && !showWelcomeAlert) {
      toast.info(`${authUser.data.name}님 환영합니다!`);
      setShowWelcomeAlert(true);
    }
  }, [dispatch, authUser, showWelcomeAlert]);

  function handleLogout() {
    try {
      if (authUser) {
        dispatch(logoutUser());
        toast.success(`${authUser.data.name}님 로그아웃 되었습니다.`, {
          onClose: () => window.location.reload(),
        });
      } else {
        alert("이미 로그아웃 되었습니다.");
      }
    } catch (error) {
      console.error("Error handling logout:", error);
    }
  }

  return (
    <>
      <ToastContainer />
      <NavWrapper>
        <Nav>
          <Link to="/">
            <LogoImg src={logo} alt="DeepScience X 로고" />
          </Link>
          <Link to="/info">
            <NavItem>회사 정보</NavItem>
          </Link>
          <Link to="/company">
            <NavItem>제품</NavItem>
          </Link>
          <Link to="/news">
            <NavItem>뉴스</NavItem>
          </Link>
          <Link to="/support">
            <NavItem>지원</NavItem>
          </Link>
          {authUser && showWelcomeAlert ? (
            <LoginWrapper>
              <span>{authUser.data.name}님</span>
              <button onClick={handleLogout}>로그아웃</button>
            </LoginWrapper>
          ) : (
            <LoginWrapper>
              <Link to="/auth/login">로그인</Link>
            </LoginWrapper>
          )}
        </Nav>
      </NavWrapper>
    </>
  );
}

export default NavigationBar;
