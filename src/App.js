import Header from "./components/Header";
import Posts from "./components/Posts";
import Register from "./components/Register";

import "./style/app.css";
import "./style/header.css";
import "./style/posts.css";
import "./style/post.css";
import "./style/register.css";

function App() {
  return (
    <div className="app">
      <nav>ATG World</nav>
      <Register />
      <Header />
      <Posts />
    </div>
  );
}

export default App;
