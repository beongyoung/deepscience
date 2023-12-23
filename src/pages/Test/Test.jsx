import fetchApi from "../../hooks/fetch/fetchApi";
import fetchGetCompany from "../../hooks/fetch/fetchGetCompany";

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <button onClick={fetchApi}>Fetch</button>
      <button onClick={fetchGetCompany("CLEAN_TECH")}>Get</button>
    </div>
  );
}
