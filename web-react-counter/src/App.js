import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const initialCount = +localStorage.getItem('funCounterValue') || 0;
  const [count, setCount] = useState(initialCount);


  useEffect(() => {
    count >= 0 && localStorage.setItem("funCounterValue", count)

  }, [count])

  return (
    <>
      <h2 className="counter_title">
        Clicked {count} {`${count > 1 ? 'times' : 'time'}`}
      </h2>
      <div className="counter_buttons">
        <button type="button" className="counter_btn" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button
          type="button" className="counter_btn"
          onClick={() => setCount((count) => (count ? count - 1 : 0))}
        >
          -
        </button>
        <button type="button" className="counter_btn" onClick={() => setCount(0)}>
          reset
        </button>
      </div>
    </>
  );
}

export default App;
