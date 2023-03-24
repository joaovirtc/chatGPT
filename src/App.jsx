import { useState } from "react";
import ChatGPT from "./components/chatGPT";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  return (
    <div className="App">
      <ChatGPT />
    </div>
  );
}

export default App;
