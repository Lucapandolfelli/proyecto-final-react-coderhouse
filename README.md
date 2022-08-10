# Proyecto final del curso de React de Coderhouse
![Imagen del proyecto](/public/assets/the-vintage-collection.gif)

## Idea del proyecto

La idea del proyecto final es construir un e-commerce de productos antiguos (o vintages). Es por eso que el diseño de la página busca mostrar esa sensación del estilo vintage pero llevado a algo más moderno. Actualemente ya posee navegación completa entre las páginas, los productos y las categorías. Estas últimas se muestran sobre el contenido de la página pero próximamente estarán inegradas al navbar. Además, ya se cuenta con la funcionalidad del ItemCount y su sincronización.

Por otra parte, traté de recrear qué pasaría si no hay productos en algunas de la categorías, por eso la categoría "Ropa" muestra un error.

Algo que me olvidé de mostrar en el GIF es que también te redirige a la categoría en cuestión cuando se hace click en el nombre de la misma sobre la imagen de algún producto.

### Novedades

Se implementó un context para el carrito de productos, el cual permite añadirlos sin que se repitan, sumar el total de la compra teniendo en cuenta no solo la cantidad de productos del carrito sino también la cantidad de un mismo producto elegida con el 'itemCount'. En la página de checkout se añadió también un formulario que simula la finalización de una compra, pero probablemente se cambie aparte ya que pienso implementar un carrito similar al de MercadoLibre.

