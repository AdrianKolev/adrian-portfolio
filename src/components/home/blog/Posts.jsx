import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Posts = ({ post }) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={post.cover} alt="" />
        </div>
        <div className="text">
          <span>{post.date}</span>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={"/blog/" + post.id}>
            Read More
            <KeyboardDoubleArrowRightIcon className="icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Posts;
