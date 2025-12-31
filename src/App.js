import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  // const [color, setColor] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeCards, setActiveCards] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      // console.log(data);
      setLoading(false);
      setData(data);
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;

  const changeColor = (id) => {
    setActiveCards((prev) => ({ ...prev, [id]: !prev[id] }));
    console.log(id);
  };
  // console.log("ok", activeCards);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="cardMain">
        {data &&
          data.map((item) => {
            return (
              <div
                style={{
                  padding: "20px",
                  margin: "10px",
                  cursor: "pointer",
                  backgroundColor: activeCards[item.id]
                    ? "lightgreen"
                    : "lightgray",
                }}
                className={`singleCard`}
                key={item.id}
                onClick={() => changeColor(item.id)}
              >
                <div>User Id: {item.id}</div>
                <div className="">Title:{item.title}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
