import "./style/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import Userlist from "./UsersList/UsersList";
import Signinpage from "./pages/Signinpage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/signin" element={<Signinpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
