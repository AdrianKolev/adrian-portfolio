import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = (props) => {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`https://api.shop4sport.eu/wp-json/program/v1/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <>
      <section className="Post">
        <article>
          <h1>{data.title}</h1>
          <img src={data.cover} alt="" />
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
        </article>
      </section>
    </>
  );
};

export default Post;
