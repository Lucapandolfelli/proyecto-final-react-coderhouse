const products = [
  {
    id: 1,
    title: "Producto 1",
    price: 6000,
    categoryId: 3,
    category: "Colección",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://images.unsplash.com/photo-1518015272815-38d797b67619?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    stock: 10,
    amountOfFees: 3,
  },
  {
    id: 2,
    title: "Producto 2",
    price: 10000,
    categoryId: 1,
    category: "Cocina",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://skypic.attic.city/?bucket=cdn.attic.city&key=items/7b50c078fee4f8236f04cbd73404cf6e192b106f2923b1c840abc736f663fe46-w670h705q75fit.jpeg",
    stock: 5,
    amountOfFees: 9,
  },
  {
    id: 3,
    title: "Producto 3",
    price: 2333,
    categoryId: 1,
    category: "Cocina",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://cf.ltkcdn.net/antiques/images/orig/304895-1600x1066-assorted-vintage-kitchen-tools.jpg",
    stock: 7,
    amountOfFees: 3,
  },
  {
    id: 4,
    title: "Producto 4",
    price: 2333,
    categoryId: 2,
    category: "Decoración",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHMlMjB2aW50YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    stock: 3,
    amountOfFees: 6,
  },
  {
    id: 5,
    title: "Producto 5",
    price: 45000,
    categoryId: 4,
    category: "Música",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://images.unsplash.com/photo-1528032947483-4e1df543253a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    stock: 3,
    amountOfFees: 6,
  },
  {
    id: 6,
    title: "Producto 6",
    price: 45000,
    categoryId: 5,
    category: "Muebles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://www.villagegreenrealty.com/uploads/agent-1/Fill%20Your%20Home%20Blog%20Header.jpg",
    stock: 3,
    amountOfFees: 6,
  },
  {
    id: 7,
    title: "Producto 7",
    price: 45000,
    categoryId: 7,
    category: "Deporte",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://images.unsplash.com/photo-1517591333073-96680dc97639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    stock: 3,
    amountOfFees: 6,
  },
  {
    id: 8,
    title: "Producto 8",
    price: 45000,
    categoryId: 6,
    category: "Computación",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://cdna.artstation.com/p/assets/images/images/039/294/454/large/mounier-dewancker-lucile-rendu-computer04.jpg?1625504376",
    stock: 3,
    amountOfFees: 6,
  },
];

export default products;
