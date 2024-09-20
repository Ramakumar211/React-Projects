import { useState } from "react";
import { memo } from "react";
function App() {
  return (
    // you can use React.Fragment inside the <> tag to avoid creating a new div
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="John"></Header>
      <Header title="ram"></Header>

      <Header title="Shyam"></Header>
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is hello");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update title</button>
      <Header title={title}></Header>
    </div>
  );
}

// to avoid re rendering the component use memoization

const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
});
/*function Header({ title }) {
  return <div>{title}</div>;
} */
export default App;
