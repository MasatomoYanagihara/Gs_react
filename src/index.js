import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <Profile />
      <Hey />
    </div>
  );
};

const Profile = () => {
  const name = "yana";
  const age = 31;

  return (
    <div>
      <p>私は{name}</p>
      <p>{age}歳</p>
      <p>10年後は{age + 10}歳</p>
    </div>
  );
};

const Hey = () => {
  return (
    <div>
      <p>Hey Yo</p>
    </div>
  );
};

// public/index.htmlのid="root"に<App />をレンダリング
ReactDOM.render(<App />, document.getElementById("root"));
