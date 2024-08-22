import React from "react";

const CardApp = ({ noticia }) => {
  const { urlToImage, title, description, url } = noticia;
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://media.istockphoto.com/id/1409329028/es/vector/no-hay-imagen-disponible-marcador-de-posici%C3%B3n-miniatura-icono-dise%C3%B1o-de-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=Bd89b8CBr-IXx9mBbTidc-wu_gtIj8Py_EMr3hGGaPw="
          }
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="d-flex justify-content-end p-2">
          <span>
            <a className="nav-link text-primary" href={url} target="_blank">
              Ver mas...
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardApp;
