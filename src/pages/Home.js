import React, { useState, useEffect } from "react";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import DeleteArticle from "./DeleteArticle";
import Post from "./Post/Post";
import EditArticle from "./EditArticle";
import "../App.css";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef);
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    });
  }, []);

  return (
    <div className="home_page">
      {articles.length === 0 ? (
        <p>No article found</p>
      ) : (
        articles.map(({ id, title, description, imageUrl }) => (
          <div className="home__postContainer">
            <div className="title">{title}</div>
            <div className="desc">{description}</div>
            <div className="home__postImage">
              <img src={imageUrl} alt={id} />
            </div>

            <div className="home__postBtnWrapper">
              <DeleteArticle id={id} imageUrl={imageUrl} />
              <EditArticle id={id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
