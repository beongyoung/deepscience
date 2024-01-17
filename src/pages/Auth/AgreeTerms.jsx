import { useRecoilState } from "recoil";
import { allAgreedState, agreementsState } from "../../hooks/recoilAtom";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin-top: 20px; /* Add any other styling as needed */
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

const CheckboxContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const CheckboxItem = styled.li`
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
`;

function AgreeTerms() {
  const [allAgreed, setAllAgreed] = useRecoilState(allAgreedState);
  const [agreements, setAgreements] = useRecoilState(agreementsState);

  const handleAgreementChange = (name, checked) => {
    setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every(
      (value) => value === true
    );
    setAllAgreed(allChecked);
  };

  const handleAllAgreementChange = (checked) => {
    setAgreements((prevAgreements) =>
      Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {}
      )
    );
    setAllAgreed(checked);
  };

  return (
    <Container>
      <Label>회원 정보 입력 및 이용약관 동의</Label>
      <CheckboxContainer>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="agree_check_all"
            name="agree_check_all"
            checked={allAgreed}
            onChange={(e) => handleAllAgreementChange(e.target.checked)}
          />
          <CheckboxLabel htmlFor="agree_check_all">
            이용약관 전체동의
          </CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="agree_check_used"
            name="termsAgreed"
            required
            checked={agreements.termsAgreed}
            onChange={() =>
              handleAgreementChange("termsAgreed", !agreements.termsAgreed)
            }
          />
          <CheckboxLabel htmlFor="agree_check_used">
            [필수] 이용약관 동의
          </CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="agree_check_info"
            name="personalInfoAgreed"
            required
            checked={agreements.personalInfoAgreed}
            onChange={handleAgreementChange}
          />
          <CheckboxLabel htmlFor="agree_check_info">
            [필수] 개인정보 이용 수집 방침
          </CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="agree_check_info_other"
            name="provisionAgreed"
            required
            checked={agreements.provisionAgreed}
            onChange={handleAgreementChange}
          />
          <CheckboxLabel htmlFor="agree_check_info_other">
            [필수] 개인정보 제 3자 제공 동의
          </CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="agree_check_pos"
            name="locationAgreed"
            required
            checked={agreements.locationAgreed}
            onChange={handleAgreementChange}
          />
          <CheckboxLabel htmlFor="agree_check_pos">
            [필수] 위치정보 동의 약관
          </CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="agree_check_event_receive"
            name="eventAlarmAgreed"
            checked={agreements.eventAlarmAgreed}
            onChange={handleAgreementChange}
          />
          <CheckboxLabel htmlFor="agree_check_event_receive">
            [선택] 이벤트 및 혜택 알림 수신 동의
          </CheckboxLabel>
        </CheckboxItem>
        <CheckboxItem>
          <CheckboxInput
            type="checkbox"
            id="agree_check_push"
            name="serviceAlarmAgreed"
            checked={agreements.serviceAlarmAgreed}
            onChange={handleAgreementChange}
          />
          <CheckboxLabel htmlFor="agree_check_push">
            [선택] 서비스 알림 수신 동의
          </CheckboxLabel>
        </CheckboxItem>
      </CheckboxContainer>
    </Container>
  );
}

export default AgreeTerms;
