import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(iRunOnlyOnce, []); //useEffect: 해당 코드가 딱 한번만(초기렌더링) 실행될 수 있도록 보호해준다(api호출 등에 사용) <- [](array)가 비어있기 때문
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {  //조건 걸어줄 수도 있다.
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); //keyword를 잘 지켜보다가 이게 변화할때만 실행될 것이라는 것!
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
