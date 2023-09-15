import { logDOM } from "@testing-library/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../firebase/firebaseConfig";

export const getBlogDetails = async (
  id,
  setBlog,
  setLoading,
  setFormData,
  setImage
) => {
  const docRef = doc(db, "stayUpdated", `${id}`);
  const blogDetail = await getDoc(docRef);
  const data = blogDetail.data();
  setBlog(blogDetail.data());
  setLoading(false);
  setFormData({ ...data });
  //   setImage(data.imgUrl); // Set the initial imgUrl
};

export const uploadFile = (image, setProgress, setFormData) => {
  if (image) {
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
            console.log("Upload is running", progress);
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
        });
      }
    );
  }
};

export const handleChange = (event, setImage, setFormData) => {
  const { name, value, files } = event.target;

  if (name === "image") {
    const selectedImage = files[0];
    setImage(selectedImage);
    setFormData((prevData) => ({
      ...prevData,
      imgUrl: selectedImage ? URL.createObjectURL(selectedImage) : null,
    }));
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};

export const handleSaveAndContinue = async (
  e,
  formData,
  id,
  setModal,
  navigate
) => {
  e.preventDefault();

  const { header, date, imgUrl, imageTitle, titleDesc, body } = formData;

  if (!header || !date || !imageTitle || !titleDesc || !body) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    console.log(formData);
    await updateDoc(doc(db, "stayUpdated", id), {
      header,
      date,
      //   imgUrl: imgUrl || blog.imgUrl, // Maintain previous imgUrl if not changed
      imgUrl,
      imageTitle,
      titleDesc,
      body,
    });
    setModal(true);
    const timeout = setTimeout(() => {
      navigate("/admin");
    }, 4000);

    return () => clearTimeout(timeout);
  } catch (error) {
    console.log("Error:", error);
  }
};
