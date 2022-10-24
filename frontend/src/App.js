import "./app.css";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="main">
      <Login />
      <div className="main-registrar">
        <SignIn />
      </div>
    </div>
  );
}

export default App;
