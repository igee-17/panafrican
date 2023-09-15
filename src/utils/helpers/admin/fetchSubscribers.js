import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const subCollectionRef = collection(db, "subscribers");

export const getSubscribers = async (setPostLists, setLoading) => {
    const data = await getDocs(subCollectionRef);
    const subscribers = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPostLists(subscribers);
    setLoading(false);
    localStorage.setItem("subscribers", JSON.stringify(subscribers));
  };