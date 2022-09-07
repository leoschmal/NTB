import React ,{useEffect, useState} from 'react';
import {Post} from "../interfaces/Post";
import "./PostCard.css";

interface Props {
    post: Post;
}

type usuarioRandom = {
  email: string;
  gender: string;
  name: {first: string};
  picture:{medium:string};
  id:{value:string}
};

export default function PostCard({post}: Props) {
  const [usuario, setUsuario] = useState<usuarioRandom[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://randomuser.me/api/?nat=es", {
        method: "GET"
      });
      const jsonData = await data.json();
      setUsuario(jsonData.results);
    };
    api();
  },[]);



  return (
    <div className="card card-body bg-primary m-3" key={post.id}>
            <h2>{post.title.toUpperCase()}</h2>
            <p>{post.body}</p>            
            {usuario.map((value) => {
                  return (
                    <div key={value.id.value}>
                      <div>{value.name.first}</div>
                      <div>{value.email}</div>
                      <div>{value.gender}</div>
                      <img className="imgCard " src= {value.picture.medium} alt="dd" /> 
                    </div>
                        )
                                    }
                                    )}        
            
                      
    </div>
  )
}
