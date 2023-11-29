import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");
console.log("Code:", code);

function App() {
  return (
    <div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default App;
