import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import selectImage from "../../assets/images/myImage.svg";
import closeModal from "../../assets/logos/closeModal.svg";
import ReactQuill from "react-quill";
import Dashboard from "../../components/admin/Dashboard";

const SendMail = () => {
  const [isModal, setModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([])
  const [subscribers, setSubscribers] = useState(JSON.parse(localStorage.getItem('subscribers')))


  const navigate = useNavigate()
  const selectedList = localStorage.getItem('selectedItems') || []

  const selected = subscribers?.filter((item) => selectedList.includes(item.id)).map((item) => item.email)

  const [formData, setFormData] = useState({
    subject: "",
    body: "",
    selectedEmails: selected.join(", "),
  });
  // const location = useLocation();
  // const { selectedItems } = location.state;

  useEffect(() => {
    setSelectedItems(selected.join(", "));
    console.log(formData);
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBodyChange = (value) => {
    setFormData({
      ...formData,
      body: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailData = {
      subject: formData.subject,
      body: formData.body,
      selectedEmails: selectedItems.split(",").map(email => email.trim()) // Convert comma-separated emails to an array
    };

    try {
      const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        // Email sent successfully
        setModal(true);
        localStorage.removeItem('selectedItems')
      } else {
        // Handle error
        alert(response.status)
      }
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const handleDiscard = () => {
    // Handle discard logic
    navigate("/admin/subscribers");
  };
  // console.log(selectedItems);


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
              <p>Mail sent successfully!</p>
              <Link to="/admin/subscribers" className="button">
                Dashboard
              </Link>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="header form-item">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Add mail subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="selectedEmails">Selected Email</label>
            <input
              type="text"
              id="selectedEmails"
              name="selectedEmails"
              value={formData.selectedEmails}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="body">Body Of Message</label>
            <ReactQuill
              className="textarea"
              value={formData.body}
              onChange={handleBodyChange}
            />
          </div>
          <div className="buttons">
            <button className="discard" type="button" onClick={handleDiscard}>
              Discard
            </button>
            <button className={"submit"} type="submit">
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </Dashboard>
  );
};

export default SendMail;
