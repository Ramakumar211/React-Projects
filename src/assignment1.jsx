import { useState, useMemo } from "react";
function App1() {
  const [input, setInput] = useState(0);
  const factorial = useMemo(() => {
    let fact = 1;
    for (let i = 1; i <= input; i++) {
      fact *= i;
    }
    return fact;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>factorial of the number : {factorial} </p>
    </div>
  );
}
export default App1;
