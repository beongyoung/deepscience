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
import REDIRECT_URI from "../../hooks/OAuth";
import googleBtn from "../../assets/signin-assets/Web (mobile + desktop)/png@1x/neutral/web_neutral_sq_SU@1x.png";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  // 	console.log(rememberId);
  // }, [rememberId]);

  const onLoginClick = () => {
    // 로그인

    // 아이디 저장 관리
    // rememberId ? 쿠키 없애기 : 만들기
    navigate("/");
  };

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

          <a href={REDIRECT_URI} className="googlebtn">
            <img src={googleBtn} alt="google 로그인" />
          </a>
        </Stack>
      </Box>
    </Container>
  );
}

export default Login;
