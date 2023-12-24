import { useRecoilState } from "recoil";
import { termsAgreedState, userInfoState } from "../../hooks/recoilAtom";

const TermsPage = () => {
  const [termsAgreed, setTermsAgreed] = useRecoilState(termsAgreedState);
  console.log(termsAgreed);
  const handleAgree = () => {
    setTermsAgreed(true);
  };

  return (
    <div>
      <h1>약관 동의 페이지</h1>
      <p>약관 내용...</p>
      <button onClick={handleAgree}>동의</button>
    </div>
  );
};

const InfoPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  console.log(userInfo);
  const handleInfoSubmit = (data) => {
    setUserInfo(data);
  };

  return (
    <div>
      <h1>정보 입력 페이지</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // 유효성 검사 및 Recoil 상태 업데이트
          handleInfoSubmit({
            /* 입력된 정보 데이터 */
          });
        }}
      >
        {/* 정보 입력 폼 요소들 */}
        <button type="submit">가입 완료</button>
      </form>
    </div>
  );
};

const SignupPage = () => {
  const [termsAgreed] = useRecoilState(termsAgreedState);

  return <div>{!termsAgreed ? <TermsPage /> : <InfoPage />}</div>;
};

export default SignupPage;
