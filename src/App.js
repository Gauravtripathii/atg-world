import Header from "./components/Header";
import Posts from "./components/Posts";

import "./style/header.css";
import "./style/posts.css";
import "./style/post.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
    </div>
  );
}

export default App;
