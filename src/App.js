import React from "react";
import Button from "./components/Button/Button";
const App = () => {
  return (
    <div>
      <h3>Button</h3>
      <Button label="submit" onClick={() => alert("button clicked")} />
    </div>
  );
};
export default App;
