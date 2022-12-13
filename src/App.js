import Nav from "./components/Nav";
import Home from "./components/home/Home";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Home />
      <Router>
        <Routes>
          {/* <Route path="/linktree" element={<Linktree />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
