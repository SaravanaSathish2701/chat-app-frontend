import { useEffect, useState } from "react";
import axios from "axios";

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        setData(response.data);
      } catch (err) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data ? <div>{JSON.stringify(data)}</div> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetchingComponent;
