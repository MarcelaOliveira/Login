import React from "react";

function Welcome(props) {
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <h1>Welcome, {props.nome}!</h1>
        <h2>Hello, world!!</h2>
      </div>
    </div>
  );
}

export default Welcome;
