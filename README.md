# NBT React Challenge

- Crear una app en React, que utilice preferentemente Typescript.
- Hacer una interfaz que te permita filtrar los posts de JSONPlaceholder.
    - Hint: La URL debe quedar así: https://jsonplaceholder.typicode.com/posts?body_like=lorem
    - La definición de los estilos queda a criterio tuyo.
- Constraints:
    - Para hacer las peticiones usar TanStack Query (Antes se llamaba React Query, quizás la conocés con ese nombre).
        - Importante leer los **Important Default**.
    - El input se debe ***focusear*** cuando entrás a la página.
    - No se debe permitir ver posts sin un filtro del body (cuando el string está vacío).
    - Subir la app a Github.

___

## Desarrollo
![Interface](https://raw.githubusercontent.com/leoschmal/NTB/main/public/interface.jpg?token=GHSAT0AAAAAABYLTQ52DXID4OXFDB4KKNFYYYZKOXA)

Proyecto realizado con [Create React App](https://github.com/facebook/create-react-app).

Se utilizó Typescript, como preferentemente se solicitó.

Para estilos, se utilizó [Boostwatch](https://bootswatch.com/), que es una variante con base en Bootstrap con distintos temas definidos.

La app filtra palabras incluidas en los párrafos de todos los post que provee la API JsonPlaceholder y muestra los resultados en forma de tarjetas, cada una correspondiente a un post.

Si no hay palabra a consultar (cadena vacía), no se muestran resultados.

Si no se encuentra la palabra (resultados 0), se informa y se invita a realizar otra búsqueda.


Además, para darle una armonía visual, se agregan datos de autores de cada post, solicitando tales datos desde la API [RandomUser](https://randomuser.me/).


___

## Deploy

Se ha hosteado la app en Vercel

- [NTB Challenge](https://ntbchallenge.vercel.app/)

