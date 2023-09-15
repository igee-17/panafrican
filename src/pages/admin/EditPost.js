import React, { useEffect, useState } from "react";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/firebaseConfig";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import selectImage from "../../assets/images/myImage.svg";
import closeModal from "../../assets/logos/closeModal.svg";
import ReactQuill from "react-quill";
import Dashboard from "../../components/admin/Dashboard";
import {
  getBlogDetails,
  handleChange,
  handleSaveAndContinue,
  uploadFile,
} from "../../utils/helpers/admin/editPost";
// import { getBlogDetails } from "../../utils/admin/fetchPosts";

const CreatePostStayUpdated = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(null);
  const [isModal, setModal] = useState(false);
  const [blog, setBlog] = useState({});
  const [formData, setFormData] = useState({
    header: "",
    date: "",
    imgUrl: null,
    imageTitle: "",
    titleDesc: "",
    body: "",
    published: blog.published,
    top: blog.top,
  });
  const [loading, setLoading] = useState(false);

  const isAuthenticated = localStorage.getItem("isAuth");
  const postCollectionRef = collection(db, "stayUpdated");

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // fetch the blog details and populate the details
    getBlogDetails(id, setBlog, setLoading, setFormData, setImage);
  }, [id, loading]);

  useEffect(() => {
    uploadFile(image, setProgress, setFormData);
  }, [image]);

  // console.log(blog);
  console.log(formData.top);

  const handleQuillChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      body: content,
    }));
  };

  const handleDiscard = () => {
    // Handle discard logic
    navigate("/admin/stay-updated");
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Dashboard>
      <div className="create-post">
        {isModal && (
          <div className="modal">
            <div className="modal-center">
              <div className="close-btn">
                <img src={closeModal} alt="closeModal" />
              </div>
              <div className="icon">
                <AiOutlineCheckCircle />
              </div>
              <p>Post edited successfully!</p>
              <Link to="/admin" className="button">
                Dashboard
              </Link>
            </div>
          </div>
        )}
        <form>
          <div className="header form-item">
            <label htmlFor="header">Header</label>
            <input
              type="text"
              id="header"
              name="header"
              placeholder="Add title or header"
              value={formData.header}
              onChange={(e) => handleChange(e, setImage, setFormData)}
            />
          </div>
          <div className="form-item date-item">
            <label htmlFor="date">Date</label>
            <label htmlFor="date" className="custom">
              {formData.date || "Add or change date"}
              <span>
                <BsCalendar2Date />
              </span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={(e) => handleChange(e, setImage, setFormData)}
            // onChange={handleChange}
            />
          </div>
          <div
            className="image-item background"
            style={{
              backgroundImage: `url(${formData.imgUrl || blog.imgUrl})`,
            }}
          >
            <label htmlFor="image">
              <img src={selectImage} alt="selectImage" />
              <p>{blog.imageTitle || "No Image Selected"}</p>
              <button type="button">{"Replace image"}</button>
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => handleChange(e, setImage, setFormData)}
            // onChange={handleChange}
            />
          </div>

          {/* {progress > 0 && (
              <>
                <progress value={progress} max="100" />
                {progress}%
              </>
            )} */}
          <div className="form-item">
            <label htmlFor="image-title">Short Image Title</label>
            <input
              type="text"
              id="image-title"
              name="imageTitle"
              placeholder="Add Short Image Title"
              value={formData.imageTitle}
              onChange={(e) => handleChange(e, setImage, setFormData)}
            // onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="title-desc">Short Title Description</label>
            <input
              type="text"
              id="title-desc"
              name="titleDesc"
              placeholder="Add Short Title Description"
              value={formData.titleDesc}
              onChange={(e) => handleChange(e, setImage, setFormData)}
            // onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="body">Body Of Article</label>
            <ReactQuill
              className="textarea"
              value={formData.body}
              onChange={handleQuillChange}
            />
          </div>
          <div className="buttons">
            <button className="discard" type="button" onClick={handleDiscard}>
              Discard
            </button>
            <button
              className="submit"
              type="submit"
              onClick={(e) =>
                handleSaveAndContinue(e, formData, id, setModal, navigate)
              }
              disabled={progress !== null && progress < 100}
            >
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </Dashboard>
  );
};

export default CreatePostStayUpdated;
