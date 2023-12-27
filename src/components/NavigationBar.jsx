import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "styled-components";
import logo from "../assets/logo.png";
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
  const [storedAuthUser, setStoredAuthUser] = useState(
    localStorage.getItem("authUser")
  );

  useEffect(() => {
    setStoredAuthUser(localStorage.getItem("authUser"));
  }, [storedAuthUser]);

  function handleLogout() {
    if (storedAuthUser) {
      dispatch(logoutUser());
      alert("로그아웃 되었습니다.");
      window.location.reload();
    } else {
      alert("이미 로그아웃 되었습니다.");
    }
  }

  return (
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
        {storedAuthUser ? (
          <LoginWrapper>
            <span>{JSON.parse(storedAuthUser).data.name}님</span>
            <button onClick={handleLogout}>로그아웃</button>
          </LoginWrapper>
        ) : (
          <LoginWrapper>
            <Link to="/auth/login">로그인</Link>
          </LoginWrapper>
        )}
      </Nav>
    </NavWrapper>
  );
}

export default NavigationBar;
