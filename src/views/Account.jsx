import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Location from "../components/Location";
import Navbar from "../components/Navbar";

export default function Account() {
  const [responseData, setResponseData] = useState([]);

  var latitude;
  var longitude;

  const API_URI =
    "https://didactic-engine-w44rvpw4v7g3gx59-5000.app.github.dev/search_place";

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;

          console.log("esdgds")
          console.log(latitude)
          console.log(longitude)

          const data = {
            lat: latitude,
            lng: longitude,
            keyword: "punto de interes",
          };
      
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data),
          };
      
          fetch(API_URI, requestOptions)
            .then((response) => response.json())
            .then((res) => {
              console.log(res)
              setResponseData(res);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        },
        function (error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("El usuario denegó la solicitud de ubicación.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("La información de ubicación no está disponible.");
              break;
            case error.TIMEOUT:
              console.error(
                "Se agotó el tiempo de espera para obtener la ubicación."
              );
              break;
            case error.UNKNOWN_ERROR:
              console.error("Se produjo un error desconocido.");
              break;
          }
        }
      );
    } else {
      console.error("El navegador no admite la geolocalización.");
    }


  }, []);

  return (
    <div className="container-main">
      <div className="bg-map">
        <Header />
        <Navbar />
      </div>
      <main className="box-main"></main>
      <Footer />
    </div>
  );
}
