import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const onStorageUpdate = (e) => {
    const { key, newValue } = e;
    if (key === "funCounterValue") {
      setCount(newValue);
    }
  };

  useEffect(() => {
    setCount(+localStorage.getItem("funCounterValue") || 0);
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, []);

  return (
    <>
      <h2 className="counter_title">
        Clicked {count} {`${count > 1 ? 'times' : 'time'}`}
      </h2>
      <div className="counter_buttons">
        
        <button type="button" className="counter_btn" onClick={() => { setCount((count) => +count + 1); localStorage.setItem("funCounterValue", +count + 1); }}>
          +
        </button>

        <button
          type="button" className="counter_btn"
          onClick={() => { setCount((count) => (count ? +count - 1 : 0)); localStorage.setItem("funCounterValue", count ? +count - 1 : 0); }}
        >
          -
        </button>

        <button type="button" className="counter_btn" onClick={() => { setCount(0); localStorage.setItem("funCounterValue", 0); }}>
          reset
        </button>

      </div>
    </>
  );
}

export default App;
