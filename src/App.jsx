import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./layouts/Navbar";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
