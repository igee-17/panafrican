import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import selectImage from "../../assets/images/myImage.svg";
import closeModal from "../../assets/logos/closeModal.svg";
import ReactQuill from "react-quill";

const CreatePostStayUpdated = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isModal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    header: "",
    date: "",
    imgUrl: null,
    imageTitle: "",
    titleDesc: "",
    body: "",
    published: true,
    top: false,
  });

  const postCollectionRef = collection(db, "stayUpdated");
  let navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `${image?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setFormData((prev) => ({ ...prev, imgUrl: downloadUrl }));
            // console.log("hello");
          });
        }
      );
    };

    formData && uploadFile();
  }, [image]);

  // useEffect(() => {

  // }, [isModal]);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "image") {
      const selectedImage = files[0];
      setImage(selectedImage);
      console.log(image);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleQuillChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      body: content,
    }));

    console.log(content);
  };

  const handleDiscard = () => {
    // Handle discard logic
    navigate("/admin/stay-updated");
  };

  const handleSaveAndContinue = async (e) => {
    e.preventDefault();
    const { header, date, imgUrl, imageTitle, titleDesc, body } = formData;

    if (!header || !date || !imgUrl || !imageTitle || !titleDesc || !body) {
      alert("kindly fill all fields");
      return;
    }
    // Handle save and continue logic
    // console.log("hey there");
    await addDoc(postCollectionRef, { ...formData });
    // await addDoc(postCollectionRef, { title: "hello" });
    // console.log("entered");

    setModal(true);

    // const timeout = setTimeout(() => {
    //   navigate("/admin");
    // }, 4000);

    // return () => clearTimeout(timeout);
  };

  return (
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
            <p>Post created successfully!</p>
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="image-item">
          <label htmlFor="image">
            <img src={selectImage} alt="selectImage" />
            <p>{image ? image.name : "No Image Selected"}</p>
            <button type="button">
              {image ? "Replace Image" : "Select image"}
            </button>
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        {progress > 0 && (
          <>
            <progress value={progress} max="100" />
            {progress === 100 ? "Uploaded" : `Uploading Image... ${progress}%`}
          </>
        )}
        <div className="form-item">
          <label htmlFor="image-title">Short Image Title</label>
          <input
            type="text"
            id="image-title"
            name="imageTitle"
            placeholder="Add Short Image Title"
            value={formData.imageTitle}
            onChange={handleChange}
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
            onChange={handleChange}
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
            className={progress < 100 ? "submit disabled" : "submit"}
            type="submit"
            onClick={(e) => handleSaveAndContinue(e)}
            disabled={progress !== null && progress < 100}
          // disabled={progress < 100}
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostStayUpdated;
