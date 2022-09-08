import React, { useEffect, useState } from "react";
import { Post } from "../interfaces/Post";

type usuarioRandom = {
  email: string;
  gender: string;
  name: { first: string; last: string };
  picture: { large: string };
  id: { value: string };
  location: { city: string; country: string };
};
interface Props {
  post: Post;
};


export default function PostCard({ post }: Props) {
  const [usuario, setUsuario] = useState<usuarioRandom[]>([]);

  useEffect(() => {
    const apiUsuarios = async () => {
      const data = await fetch("https://randomuser.me/api/?nat=es,mx", {
        method: "GET",
      });
      const jsonData = await data.json();
      setUsuario(jsonData.results);
    };
    apiUsuarios();
  });

  return (
    <div
      className="card card-body bg-primary m-3 d-flex flex-lg-row justify-content-center gap-3"
      key={post.id}
    >
      <div className="w-75">
        <h2 className="display-6">{post.title.toUpperCase()}</h2>
        <p className="pt-2 lead">{post.body}</p>
      </div>
      {usuario.map((value) => {
        return (
          <div key={value.id.value} className="text-center p-0 bg-info w-25">
            <img
              className="rounded-circle shadow-lg"
              src={value.picture.large}
              alt="dd"
            />
            <p className="p-0 m-0 lead">
              <strong>
                {value.name.first} {value.name.last}
              </strong>
            </p>
            <p className="p-0 m-0">{value.email}</p>
            <p className="p-0 m-0">
              {value.location.city},{value.location.country}
            </p>
          </div>
        );
      })}
    </div>
  );
}
