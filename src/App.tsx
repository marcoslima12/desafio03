import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { More } from "./pages/Post";

function App() {
  return (
    <BrowserRouter basename="/github-blog">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/more" Component={More} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
