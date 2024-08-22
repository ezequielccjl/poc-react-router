import { useEffect, useState } from "react";
import "./App.css";
import { getAll } from "./requests/index";

function App() {
  const [breeds, setBreeds] = useState<any>([]);

  useEffect(() => {
    getAll().then((result) => {
      console.log(result);
      setBreeds(result ?? []);
    });
  }, []);

  return (
    <div>
      <h1>Razas</h1>
      <ul>
        {breeds.map((i: any) => {
          return <li>{i.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
