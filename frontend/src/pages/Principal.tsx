import { useEffect, useState } from "react";
import api from "../services/api";

const Principal = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    api.get("principal/").then((res) => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="principal-page">
      <img
        src={`http://127.0.0.1:8000${data.photo}`}
        alt="Principal"
      />
      <h2>{data.name}</h2>
      <h4>{data.designation}</h4>
      <p>{data.message}</p>
    </div>
  );
};

export default Principal;
