import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Flight.css";
import { Link } from "react-router-dom";

const Flight = () => {
  const [Flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setFlights(response.data);
    };

    fetchData();
  }, []);

  const deleteFlight = async (FlightId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${FlightId}`)
      .then((respones) => {
        setFlights((prevFlight) => prevFlight.filter((Flight) => Flight._id !== FlightId));
        toast.success(respones.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editFlight = async (FlightId)=>{

  }


  return (
    <div className="FlightTable">
      <Link to={"/add"} className="addButton">Add Flight</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>AirLine</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {Flights.map((Flight, index) => {
            return (
              <tr key={Flight._id}>
                <td>{index + 1}</td>
                <td>{Flight.airline}</td>
                <td>{Flight.source}</td>
                <td>{Flight.destination}</td>
                <td>{Flight.fare}</td>
                <td>{Flight.duration}</td>
                <td className="actionButtons">
                  <button  onClick={() => deleteFlight(Flight._id)}><i id="del" className="fa-solid fa-trash"> Del</i></button>
                  {/* <Link to={`/edit/${Flight._id}`}><i className="fa-solid fa-pen-to-square"></i></Link> */}
                  <Link to={`/edit/${Flight._id}`}><i className="fa-solid fa-pen-to-square">
                  <button class='buttonedit'><i id="del" className="fa-solid fa-trash"> Edit</i></button>
                  </i></Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Flight