import { Link, useLocation } from "react-router-dom";
import styles from "styled-components";
import logo from "../assets/logo.png";

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

export default function NavigationBar() {
  const location = useLocation();
  const firstPathReg = /\/([^/]+)/.exec(location.pathname);
  const firstPath = firstPathReg === null ? null : firstPathReg[1];

  return (
    <NavWrapper>
      <Nav>
        <Link to="/">
          <LogoImg src={logo} alt="DeepScience X 로고" />
        </Link>
        <Link to="/info">
          <NavItem $active={firstPath === "info"}>회사 정보</NavItem>
        </Link>
        <Link to="/company">
          <NavItem $active={firstPath === "company"}>제품</NavItem>
        </Link>
        <Link to="/news">
          <NavItem $active={firstPath === "news"}>뉴스</NavItem>
        </Link>
        <Link to="/support">
          <NavItem $active={firstPath === "support"}>지원</NavItem>
        </Link>
        <LoginWrapper>
          <Link to="auth/login">
            <NavItem $active={firstPath === "login"}>로그인</NavItem>
          </Link>
        </LoginWrapper>
      </Nav>
    </NavWrapper>
  );
}
