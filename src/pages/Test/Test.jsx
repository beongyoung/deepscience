import fetchApi from "../../hooks/fetchApi";
import fetchGetApi from "../../hooks/fetchGetApi";

export default function Test() {
  return (
    <div>
      <h1>Test</h1>
      <button onClick={fetchApi}>Fetch</button>
      <button onClick={fetchGetApi}>Get</button>
    </div>
  );
}
