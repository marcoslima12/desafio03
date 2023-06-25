import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

function App() {
  return (
    <BrowserRouter basename="/github-blog">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/post" Component={Post} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
