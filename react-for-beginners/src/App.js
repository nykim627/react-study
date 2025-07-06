import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []); //[](array)가 비어있음 : 해당 코드가 딱 한번만(초기렌더링) 실행됨
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); //keyword를 잘 지켜보다가 이게 변화할때만 실행될 것이라는 것!
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
