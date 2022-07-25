import React, { useEffect, useState } from "react";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../App.css";

const EditArticle = ({ id }) => {
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  const getPostRef = doc(db, "Articles", id);

  useEffect(() => {
    const getData = async () => {
      const data = await getDoc(getPostRef);
      setPostData(data.data());
    };
    getData();
  }, []);

  const handleNavigate = () => {
    localStorage.setItem("EditData", id);
    navigate("/post/edit");
  };

  // const handleEdit = async (id, imageUrl) => {
  //   const userDoc = doc(db, "Articles", id);
  //   await updateDoc(userDoc);
  // };

  return <button onClick={handleNavigate}>Edit</button>;
};

export default EditArticle;
