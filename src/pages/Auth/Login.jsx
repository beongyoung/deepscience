import { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  TextField,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import OAuth from "../../hooks/OAuth";
import googleBtn from "../../assets/signin-assets/Web (mobile + desktop)/png@1x/neutral/web_neutral_sq_SU@1x.png";

const StyledGoogleButton = styled(Button)`
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 0.5rem;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 3rem;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #616161;
  }
`;

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(false);
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/");
  };

  const GOOGLE_REDIRECT_URL = OAuth().GOOGLE_REDIRECT_URL;

  function handleGoogleBtnClick() {
    window.location.href = GOOGLE_REDIRECT_URL;
  }

  return (
    <Container>
      <Typography
        variant={"h5"}
        fontWeight={"bold"}
        sx={{ mt: 8, borderBottom: "1px solid black" }}
      >
        로그인
      </Typography>

      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"} spacing={1}>
          <TextField
            fullWidth
            label="아이디"
            variant="outlined"
            placeholder="아이디를 입력하세요"
            helperText="영문, 숫자를 조합하여 4~16자 입력"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />

          <TextField
            fullWidth
            label="비밀번호"
            variant="outlined"
            placeholder="비밀번호를 입력하세요"
            type="password"
            helperText="영문자, 숫자, 특수문자 조합하여 9~20자 입력(대,소문자 구별)"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Box width={"100%"}>
            <FormControlLabel
              control={<Checkbox value={rememberId} onChange={setRememberId} />}
              label="아이디저장"
            />
          </Box>

          <Button variant="contained" fullWidth onClick={onLoginClick}>
            아이디 로그인
          </Button>

          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Link to={"/auth/signup"}>
              <Button>회원가입</Button>
            </Link>
          </Box>

          <StyledGoogleButton
            variant="fullWidth"
            onClick={handleGoogleBtnClick}
            className="googlebtn"
          >
            <img src={googleBtn} alt="google 로그인" />
          </StyledGoogleButton>
        </Stack>
      </Box>
    </Container>
  );
}

export default Login;
