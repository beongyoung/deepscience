import { Container, Typography } from "@mui/material";
import SignupDone from "../../components/Signup/SignupDone.jsx";
import SignupInfo from "../../components/Signup/SignupInfo.jsx";
import SignupTerms from "../../components/Signup/SignupTerms.jsx";
import SignupStepper from "../../components/Signup/SignupStepper.jsx";

function Signup() {
  const steps = ["1. 약관동의", "2. 회원정보 입력", "3. 회원가입 완료"];
  return (
    <Container>
      <Typography
        variant={"h5"}
        fontWeight={"bold"}
        sx={{ mt: 8, mb: 4, borderBottom: "1px solid black" }}
      >
        회원가입
      </Typography>
      <SignupStepper steps={steps}>
        <SignupTerms />
        <SignupInfo />
        <SignupDone />
      </SignupStepper>
    </Container>
  );
}

export default Signup;
