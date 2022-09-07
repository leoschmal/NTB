import React from "react";
import logo from "./logo.png";
import "./App.css";
import PostForm from "./components/PostForm";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="bg-secondary text-white">
          <nav className="navbar sticky-top navbar-dark bg-primary p-0">
            <div className="container pl-0 m-0">
              <a href="/">
                <img src={logo} alt="Logo" style={{ width: "7rem" }}></img>
              </a>
            </div>
          </nav>

          <main className="container p-4">
            <PostForm />
          </main>
        </div>        
      </QueryClientProvider>
    </>
  );
}

export default App;
