import profile from "../media/icons/user.png";
import share from "../media/icons/share.png";

function Post({ image, title, name, views }) {
  return (
    <div className="post">
      <div className="post-image">
        <img src={image} alt="post image" />
      </div>
      <h3 className="title">{title}</h3>
      <div className="post-details">
          <div className="profile">
              <img src={profile} alt="user profile" />
          </div>
          <div className="two">
              <div className="name">{name}</div>
              <div className="views">{views} views</div>
          </div>
          <div className="share-btn">
              <img src={share} alt="share button" /> Share
          </div>
      </div>
    </div>
  );
}

export default Post;
