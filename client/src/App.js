import { useEffect } from "react";
import axios from "axios";

function App() {
    useEffect(() => {
      axios
        .get("/api/users")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.error("Error fetching data", error));
    }, []);
    return <div> App</div>;
  }

export default App;
