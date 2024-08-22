let url =
  "https://newsapi.org/v2/top-headlines?country=ar&category=technology&q=";
let apiKey = "452d00247570407f893864ae69119af9";

export const traerNoticias = async (termino = "") => {
  try {
    const response = await fetch(`${url}${termino}&apiKey=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("No se pudo realizar la petición");
  }
};
