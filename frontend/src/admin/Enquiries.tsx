import { useEffect, useState } from "react";
import api from "../services/api";

const Enquiries = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("admissions/").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admission Enquiries</h2>

      <div className="bg-white rounded-xl shadow p-6">
        {data.map((e) => (
          <div key={e.id} className="border-b py-4">
            <h4 className="font-semibold">{e.name}</h4>
            <p>{e.email}</p>
            <p>{e.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enquiries;
