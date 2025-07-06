import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(iRunOnlyOnce, []); //useEffect: 해당 코드가 딱 한번만(초기렌더링) 실행될 수 있도록 보호해준다(api호출 등에 사용)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
