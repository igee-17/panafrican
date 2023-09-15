import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const postCollectionRef = collection(db, "stayUpdated");



export const getPosts = async (setPostLists, setLoading) => {
  try {
    console.log('fetching posts');
    const data = await getDocs(postCollectionRef);
    console.log(`data suppposed to be here: ${data}`);
    const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(`posts suppposed to be here: ${posts}`);
    setPostLists(posts);
    setLoading(false);
    localStorage.setItem("posts", JSON.stringify(posts));

  } catch (error) {
    console.log(error);
    console.log('there was an error fetching the posts');

  }

};


export const getBlogDetails = async (id, setBlog, setLoading) => {
  const docRef = doc(db, "stayUpdated", `${id}`);
  const blogDetail = await getDoc(docRef);
  setBlog(blogDetail.data());
  setLoading(false);
};
