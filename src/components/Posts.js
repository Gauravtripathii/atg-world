import Post from "./Post";

import profile1 from "../media/post/one.png";
import profile2 from "../media/post/two.png";
import profile3 from "../media/post/three.png";

function Posts() {
  return (
    <div className="posts">
      <nav>
        <b>Posts(368)</b>
        <p>
          <select>
            <option>Filter: All</option>
          </select>
        </p>
      </nav>
      <section>
        <Post
          image={profile1}
          title="What if famous brands had regular fonts? Meet RegulaBrands!"
          name="Sarthak Kamra"
          views="1.4k"
        />
        <Post
          image={profile2}
          title="What if famous brands had regular fonts? Meet RegulaBrands!"
          name="Sarthak Kamra"
          views="1.4k"
        />
        <Post
          image={profile3}
          title="What if famous brands had regular fonts? Meet RegulaBrands!"
          name="Sarthak Kamra"
          views="1.4k"
        />
      </section>
    </div>
  );
}

export default Posts;

// image, title, name, views
