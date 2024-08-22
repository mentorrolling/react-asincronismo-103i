import React, { useEffect, useState } from "react";
import { traerNoticias } from "./helpers/ApiFetch";
import CardApp from "./components/CardApp";

const App = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    // traerNoticias()
    //   .then((response) => {
    //     if (response.status === "ok") {
    //       setNoticias(response.articles);
    //     } else {
    //       alert("Ups! algo salió mal");
    //     }
    //     setLoading(false);
    //   })
    //   .catch((error) => console.error(error));
    fetchNoticias();
  }, [textSearch]);

  const fetchNoticias = async () => {
    try {
      const { articles, status } = await traerNoticias(textSearch);
      if (status === "ok") {
        setNoticias(articles);
      } else {
        alert("Ups! algo salió mal");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // const buscarNoticia = (e) => {
  //   e.preventDefault();

  //   fetchNoticias();
  // };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h1>Noticias de Tecnología 🖥 </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col offset-md-3 col-md-6">
          <form>
            <input
              className="form-control"
              type="text"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
      {loading ? (
        <div className="text-center my-5">
          <h4>Cargando data...</h4>
        </div>
      ) : (
        <div className="row my-5 row-cols-1  row-cols-md-3 row-cols-lg-4  g-4">
          {noticias.map((noticia, index) => (
            <CardApp key={index} noticia={noticia} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
