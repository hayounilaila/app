import { BrowserRouter as Router } from "react-router-dom";

import "assets/style/main.scss";
import { AppRoutes } from "routes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
