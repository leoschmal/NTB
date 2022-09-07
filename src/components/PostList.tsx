import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../interfaces/Post";
import PostCard from "./PostCard";

export default function PostList(props: any) {
   const getPosts = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?body_like=${props.busqueda}`
    );
    return response.json();
  };

  const { data, status } = useQuery(["posts", props.busqueda], getPosts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: 0,
  });
  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-light text-center" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="alert alert-dismissible alert-danger">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Error!</strong>
        <a href="/" className="alert-link">
          Ingrese otra búsqueda
        </a>
        e inténtelo nuevamente.
      </div>
    );
  }

  return (
    <>
    {Object.keys(data).length !==0 ? (
      <>
      <h2 className="text-center">{Object.keys(data).length} </h2>
      <h2 className="text-center">Resultados</h2>
      {data.map((post: Post, key: any) => (
        <PostCard post={post} key={post.id} />
      ))}
      </>)
      :(
      <div className="d-flex justify-content-center"><p className="alert alert-dismissible alert-warning text-center w-50">      
      <strong>Ups! </strong>
      No tuvimos suerte. 
      <a href="/" className="alert-link">
        Ingrese otra búsqueda 
      </a>
        e inténtelo nuevamente.
    </p></div>)
      }
      </>
  );
}
