import React from "react";

function act1() {
  console.log("acted 1");
}
function act2() {
  console.log("acted 2");
}

function AnotherRandomComponent() {
  return <div>super random</div>;
}

export function App() {
  return (
    <div>
      <button onClick={() => act1()}>Action1</button>
      <button onClick={act2}>Action2</button>
      <AnotherRandomComponent />
    </div>
  );
}

export default App;
