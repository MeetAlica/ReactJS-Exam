import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Trivia from "./pages/Trivia";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Trivia topic="General" />}></Route>
        <Route path="/music" element={<Trivia topic="Music" />}></Route>
        <Route path="/sports" element={<Trivia topic="Sports" />}></Route>
      </Routes>
    </>
  );
}

export default App;
