import TermsPage from "./AgreeTerms.jsx";
import { agreementsState } from "../../hooks/recoilAtom.jsx";
import Info from "./Info.jsx";

function Signup() {
  return <div>{agreementsState ? <TermsPage /> : <Info />}</div>;
}

export default Signup;
