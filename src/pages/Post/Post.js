import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase";
import { toast } from "react-toastify";
import { onAuthStateChanged, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [editData, setEditData] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const editValues = localStorage.getItem("EditData");
    setEditData(editValues);
  }, []);
  const [user, setUser] = useState({});
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }
    const storageRef = ref(storage, `/images/${formData.image.name}`);
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              navigate("../Home")
              setProgress(0);
              
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };
  return (
    <div className="cpContainer">
      {!user ? (
        <h1>please login</h1>
      ) : (
        <>
          <h2>CREATE POST</h2>
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="input"
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />

          {/* description */}
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />

          {/* image */}
          <label>Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="form-control"
            onChange={(e) => handleImageChange(e)}
          />

          {/* progress */}
          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
          <div>
            <button
              className="form-control"
              onClick={handlePublish}
            >
              Publish
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
