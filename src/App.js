import Header from "./components/Header";
import Posts from "./components/Posts";
import Register from "./components/Register";

import "./style/header.css";
import "./style/posts.css";
import "./style/post.css";
import "./style/register.css";

function App() {
  return (
    <div className="App">
      <Register />
      <Header />
      <Posts />
    </div>
  );
}

export default App;
