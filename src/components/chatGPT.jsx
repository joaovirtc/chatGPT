import React, { useState } from "react";
import axios from "axios";
import logo from "../../public/logo.png";
import { FiSend } from "react-icons/fi";
export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container">
      <div className="container-response">
        <img src={logo} alt="" />
        <p>{response}</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="div-form">
          <input
            className="input"
            type="text"
            value={prompt}
            onChange={handlePrompt}
          />
          <button>
            <FiSend color="#ffffff8e#" size={17} />
          </button>
        </div>
        <p className="help">
          ChatGPT Mar 14 Version. Free Research Preview. Our goal is to make AI
          systems more natural and safe to interact with. Your feedback will
          help us improve.
        </p>
      </form>
    </div>
  );
}
