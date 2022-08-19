import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase";
// import { async } from '@firebase/util'
import { toast } from "react-toastify";
// import { ref } from 'yup'
import { deleteObject, ref } from "firebase/storage";
import DeleteIcon from '@mui/icons-material/Delete';
import "../App.css";

const DeleteArticle = ({ id, imageUrl }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "Articles", id));
        toast("Article deleted successfully", { type: "success" });
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
      } catch (error) {
        toast("deleted file", { type: "error" });
        console.log(error);
      }
    }
  };
  return <button onClick={handleDelete}><DeleteIcon/></button>;
};

export default DeleteArticle;
