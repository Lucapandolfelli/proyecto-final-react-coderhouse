import "./CategoryList.scss";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const categories = [
    { categoryName: "Cocina", categoryId: 1 },
    { categoryName: "Decoración", categoryId: 2 },
    { categoryName: "Colección", categoryId: 3 },
    { categoryName: "Música", categoryId: 4 },
    { categoryName: "Muebles", categoryId: 5 },
    { categoryName: "Computación", categoryId: 6 },
    { categoryName: "Deporte", categoryId: 7 },
    { categoryName: "Ropa", categoryId: 8 },
  ];

  return (
    <div className="category-list">
      <ul className="category-list__container">
        {categories.map((category) => {
          return (
            <Link
              to={`/category/${category.categoryId}`}
              key={category.categoryId}
            >
              <li className="category-list__container--item">
                {category.categoryName}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
