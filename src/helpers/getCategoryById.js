import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const getCategoryById = async (id) => {
  const categoriesCollection = collection(db, "categories");
  const categoriesSnapshot = await getDocs(categoriesCollection);
  const categoriesList = categoriesSnapshot.docs.map((doc) => {
    let category = doc.data();
    category.id = doc.id;
    return category;
  });
  return categoriesList.find((item) => item.id === id);
};

export default getCategoryById;
