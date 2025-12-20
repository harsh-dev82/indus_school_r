import { useEffect, useState } from "react";
import api from "../services/api";

export default function HomeBanner() {
  const [banners, setBanners] = useState<any[]>([]);

  useEffect(() => {
    api.get("banners/").then(res => setBanners(res.data));
  }, []);

  return (
    <div className="pt-20">
      {banners.map(banner => (
        <div
          key={banner.id}
          className="h-[80vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <div className="bg-black/50 w-full h-full flex items-center">
            <div className="max-w-4xl mx-auto text-white px-6">
              <h1 className="text-5xl font-bold">{banner.title}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
