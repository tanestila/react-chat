import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from "./components/ChatFeed";
import { LoginForm } from "./components/LoginForm.jsx";
import "./App.css";

export const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID=""
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
