import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Dashboard from "../../components/admin/Dashboard";
import deleteLogo from "../../assets/logos/delete.svg";
import alert from "../../assets/logos/alert.svg";
import closeModal from "../../assets/logos/closeModal.svg";
import { getPosts } from "../../utils/helpers/admin/fetchPosts";
import CustomLoader from "../../components/resources/CustomLoader";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModal, setModal] = useState(false);
  const [id, setId] = useState("");

  const isAuthenticated = localStorage.getItem("isAuth");

  useEffect(() => {
    window.scroll(0, 0);
    setLoading(true);
    return () => getPosts(setPosts, setLoading);
  }, []);

  // console.log(posts);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const postDocRef = doc(db, "stayUpdated", id); // Create the document reference
      await deleteDoc(postDocRef); // Delete the document using the reference
      // setLoading(false);

      getPosts(setPosts, setLoading);
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePublishToggle = async (id, isPublished) => {
    try {
      const postDocRef = doc(db, "stayUpdated", id);
      await updateDoc(postDocRef, { published: !isPublished });
      getPosts(setPosts, setLoading);
    } catch (error) {
      console.log(error);
    }
  };
  const handleTopnewsToggle = async (id, isTopnews) => {
    console.log(isTopnews);
    try {
      const postDocRef = doc(db, "stayUpdated", id);
      await updateDoc(postDocRef, { top: !isTopnews });
      getPosts(setPosts, setLoading);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Dashboard>
      {isModal && (
        <div className="modal">
          <div className="modal-center">
            <div className="close-btn" onClick={() => setModal(false)}>
              <img src={closeModal} alt="closeModal" />
            </div>
            <div className="icon">
              <img src={alert} alt="alert" />
            </div>
            <p>Are you sure you want to delete this post?</p>
            <div className="buttons">
              <button
                to="/admin"
                className="button"
                onClick={() => handleDelete(id)}
              >
                Yes, confirm
              </button>
              <button className="grey button" onClick={() => setModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <Link to="/admin/stay-updated/create-post" className="add-btn">
        Add New Post
      </Link>
      <div className="dashboard">
        {loading ? (
          <CustomLoader />
        ) : (
          <table>
            <thead>
              <tr>
                <td>S/N</td>
                <td>Article Name</td>
                <td>Top News</td>
                <td>Date</td>
                <td>Unpublished</td>
                <td>Published</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>

            <tbody>
              {posts?.map((post, index) => {
                const { header, id, date, published, top } = post;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{header}</td>
                    <td className="top">
                      <input
                        type="radio"
                        name={`top${index}`}
                        checked={top}
                        onClick={() => handleTopnewsToggle(id, top)}
                        readOnly
                      />
                    </td>
                    <td className="date">{date}</td>
                    <td>
                      <input
                        type="radio"
                        name={`unpublished${index}`}
                        checked={!published}
                        onChange={() => handlePublishToggle(id, published)}
                      />
                    </td>
                    <td>
                      <input
                        type="radio"
                        name={`published${index}`}
                        checked={published}
                        onChange={() => handlePublishToggle(id, published)}
                      />
                    </td>
                    <td>
                      <Link to={`/admin/stay-updated/edit-post/${id}`}>
                        Edit
                      </Link>
                    </td>
                    <td>
                      <img
                        src={deleteLogo}
                        alt="deleteLogo"
                        className="delete"
                        onClick={() => {
                          setId(id);
                          setModal(true);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </Dashboard>
  );
};

export default AllPosts;
