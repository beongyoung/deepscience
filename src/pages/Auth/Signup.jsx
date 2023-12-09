import { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

function SignUpPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const onSignUpClick = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    try {
      // Use Axios to make a POST request
      const response = await axios.post("localhost:0880", {
        userId: id,
        password: password,
      });

      // Handle the response data, e.g., show a message based on success or failure
      console.log(response.data);

      // Redirect the user upon successful signup
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <Container>
      <Typography
        variant={"h5"}
        fontWeight={"bold"}
        sx={{ mt: 8, borderBottom: "1px solid black" }}
      >
        회원가입
      </Typography>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={onSignUpClick}>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1}
            width={"400px"}
          >
            <TextField
              fullWidth
              label="아이디"
              variant="outlined"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <TextField
              fullWidth
              label="비밀번호"
              variant="outlined"
              placeholder="비밀번호를 입력하세요"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              fullWidth
              label="비밀번호 재입력"
              variant="outlined"
              placeholder="비밀번호를 다시 입력하세요"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button variant="contained" type="submit" fullWidth>
              회원가입
            </Button>

            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link to={"/auth/login"}>
                <Button>로그인</Button>
              </Link>
            </Box>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

export default SignUpPage;
