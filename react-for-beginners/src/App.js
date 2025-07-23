import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //react는 18버전, react-router-dom은 6버전으로 쓰기
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
