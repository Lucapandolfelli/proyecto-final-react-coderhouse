# Proyecto final del curso de React de Coderhouse
![Imagen del proyecto](/public/assets/the-vintage-collection.gif)

## Idea

La idea del proyecto final es construir un e-commerce de productos antiguos (o vintages). Es por eso que el diseño de la página busca mostrar esa sensación del estilo vintage pero llevado a algo más moderno. Actualemente ya posee navegación completa entre las páginas, los productos y las categorías. Estas últimas se muestran sobre el contenido de la página pero próximamente estarán inegradas al navbar. Además, ya se cuenta con la funcionalidad del ItemCount y su sincronización.

Por otra parte, traté de recrear qué pasaría si no hay productos en algunas de la categorías, por eso la categoría "Ropa" muestra un error.

Algo que me olvidé de mostrar en el GIF es que también te redirige a la categoría en cuestión cuando se hace click en el nombre de la misma sobre la imagen de algún producto.

### Problemas

Por algún motivo que desconozco, y como se muestra al final del GIF, no se renderiza nuevamente el ItemDetail cuando clickeo sobre algunos de los producto de la sección "Productos relacionados". Pero sí cambia la ruta. Ese mismo problema tenía con las categorías pero lo pude solcuionar cambiando el arreglo del useEffect, pero para los productos relacionados no pude.


