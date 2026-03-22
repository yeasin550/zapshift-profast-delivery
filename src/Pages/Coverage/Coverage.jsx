import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useRef, useEffect } from "react";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// ✅ better: move JSON to src/data
import coverageData from "../../../public/data/warehouses.json";

const Coverage = () => {
  const [search, setSearch] = useState("");
  const mapRef = useRef(null);

  // filter
  const filteredData = coverageData.filter((item) =>
    item.district.toLowerCase().includes(search.toLowerCase())
  );

  // auto zoom when typing
useEffect(() => {
  if (filteredData.length > 0 && mapRef.current) {
    const bounds = filteredData.map(item => [
      item.latitude,
      item.longitude
    ]);

    mapRef.current.fitBounds(bounds, {
      padding: [50, 50], // margin
      animate: true,
    });
  }
}, [search, filteredData]);

  // button click zoom
const handleSearch = () => {
  if (filteredData.length > 0 && mapRef.current) {
    const bounds = filteredData.map(item => [
      item.latitude,
      item.longitude
    ]);

    mapRef.current.fitBounds(bounds, {
      padding: [50, 50],
      animate: true,
    });
  }
};
  return (
    <div className="mb-12">
      <div className="my-12 space-y-8">
        <h1 className="text-3xl font-bold">
          We are available in 64 districts
        </h1>

        <div>
          <input
            className="border rounded-full py-2 px-4 w-72"
            placeholder="Search district..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-lime-400 font-bold py-2 px-8 -ml-10 rounded-full border"
          >
            Search
          </button>
        </div>
      </div>

      <div className="border-t-2 border-dotted border-gray-700 my-16"></div>

      <div>
        <h1 className="text-3xl font-bold my-12">
          We deliver almost all over Bangladesh
        </h1>

        {/* ✅ FIX height */}
        <div className="h-125 w-full rounded-xl overflow-hidden">
          <MapContainer
            center={[23.685, 90.3563]}
            zoom={7}
            scrollWheelZoom={true}
            className="h-full w-full"
            whenCreated={(map) => (mapRef.current = map)}
          >
            {/* ✅ MUST be inside MapContainer */}
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filteredData.map((item, index) => (
              <Marker
                key={index}
                position={[item.latitude, item.longitude]}
              >
                <Popup>
                  <div>
                    <h2 className="font-bold">{item.district}</h2>
                    <p>Status: {item.status}</p>
                    <p>{item.covered_area.join(", ")}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;