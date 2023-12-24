import fetchApi from "../../hooks/fetch/fetchApi";
import fetchGetCompany from "../../hooks/fetch/fetchGetCompany";
import fetchGetCompanyDetail from "../../hooks/fetch/fetchGetCompanyDetail";
import fetchGetUser from "../../hooks/fetch/fetchGetUser";

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <button onClick={fetchApi}>Fetch</button>
      <button onClick={fetchGetCompany}>Get</button>
      <button onClick={fetchGetCompanyDetail}>Get Detail</button>
      <button onClick={fetchGetUser}>Get User</button>
    </div>
  );
}
