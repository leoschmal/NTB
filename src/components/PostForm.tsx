import React from "react";
import { useState } from "react";
import PostList from "./PostList";

export default function PostForm() {
  const [busqueda, setBusqueda] = useState<string>("");

  return (
    <>
      <h2 className="text-center display-4 fw-bold">Lorem Posts</h2>
      <div className="d-flex justify-content-center">
        <form
          className="input-group form-floating mb-3 p-1 w-50 rounded-pill"
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              busqueda: { value: string };
            };
            setBusqueda(target.busqueda.value);
          }}
        >
          <input
            autoFocus
            type="text"
            name="busqueda"
            className="form-control p-3 text-black rounded-pill"
            id="floatingInput"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          ></input>
          <label htmlFor="floatingInput" className="text-black">
            Ingrese búsqueda
          </label>
          <button className="btn btn-primary" type="submit" id="button-addon2">
            Filtrar
          </button>
        </form>
      </div>
      {busqueda !== ""  ? (
        <PostList busqueda={busqueda} />
      ) : (
        <p className="text-center"></p>
      )}
    </>
  );
}
