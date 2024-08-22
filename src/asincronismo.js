//Promesas
function asincronica() {
  return new Promise((resolve, reject) => {
    let isActive = true;
    setTimeout(() => {
      if (isActive) {
        resolve("El acceso esta activo");
      } else {
        reject("No se pudo acceder");
      }
    }, 3000);
  });
}

asincronica()
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));

//peticiones a una API
/*
  Una API (Application Programming Interface, o Interfaz de Programación de Aplicaciones) es un conjunto de reglas y definiciones que permite a diferentes programas de software comunicarse entre sí. Las APIs facilitan que una aplicación o servicio acceda a las funcionalidades o datos de otra aplicación, sin necesidad de que los desarrolladores conozcan los detalles internos del otro sistema.
  */
let url =
  "https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=452d00247570407f893864ae69119af9";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => document.write(error));

//Async Await
const traerNoticias = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("No se pudo realizar la petición");
  }
};

traerNoticias().then((respuesta) => console.log(respuesta));
