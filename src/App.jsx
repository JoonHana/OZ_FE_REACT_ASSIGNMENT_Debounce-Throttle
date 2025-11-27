import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [searchString, setSearchString] = useState("");

  // 타이머를 상태로 관리
  const [debTimer, setDebTimer] = useState(null);
  const [thrTimer, setThrTimer] = useState(null);

  // Debounce
  const handleDebounce = (e) => {
    const value = e.target.value;
    setQuery(value);

    // 기존 타이머 제거
    if (debTimer) clearTimeout(debTimer);

    // 새 타이머 생성
    const newTimer = setTimeout(() => {
      setSearchString(`Debounce 검색: ${value}`);
      console.log("Debounce 실행:", value);
    }, 500);

    setDebTimer(newTimer);
  };

  // Throttle
  const handleThrottle = (e) => {
    const value = e.target.value;
    setQuery(value);

    // 타이머가 돌고 있으면 무시
    if (thrTimer) return;

    const newTimer = setTimeout(() => {
      setSearchString(`Throttle 검색: ${value}`);
      console.log("Throttle 실행:", value);
      setThrTimer(null); // 다시 실행 가능하도록
    }, 500);

    setThrTimer(newTimer);
  };

  return (
    <div className="container">
      <h1>
        debounce와 throttle을
        <br />
        이용한 검색
      </h1>
      <div>
        <h2>Debounce</h2>
        <input
          type="text"
          placeholder="Debounce를 이용한 검색..."
          onChange={handleDebounce}
        />
      </div>
      <div>
        <h2>Throttle</h2>
        <input
          type="text"
          placeholder="Throttle을 이용한 검색..."
          onChange={handleThrottle}
        />
      </div>
      <p>{searchString}</p>
    </div>
  );
}

export default App;
