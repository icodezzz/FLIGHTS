import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../addFlight/Add.css";
import toast from "react-hot-toast";

const Edit = () => {
    const flights = {
        airline : '',
        source : '',
        destination : '',
        fare : '',
        duaration : ''
    };

  const { id } = useParams();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(flights);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFlight({ ...flight, [name]: value });
    console.log(flight);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/get/${id}`)
      .then((response) => {
        setFlight(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, flight)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
<div className="addflight container mt-5">
  <Link to="/" className="btn btn-link mb-3">Back</Link>
  <h3 className="text-center mb-4">Update User</h3>
  <form className="row g-3" onSubmit={submitForm}>
    <div className="row-md-6">
      <label htmlFor="airline" className="form-label">Airline</label>
      <input type="text" className="form-control" id="airline" name="airline" placeholder="Airline" onChange={inputChangeHandler} />
    </div>
    <div className="row-md-6">
      <label htmlFor="source" className="form-label">Source</label>
      <input type="text" className="form-control" id="source" name="source" placeholder="Source" onChange={inputChangeHandler} />
    </div>
    <div className="row-md-6">
      <label htmlFor="destination" className="form-label">Destination</label>
      <input type="text" className="form-control" id="destination" name="destination" placeholder="Destination" onChange={inputChangeHandler} />
    </div>
    <div className="row-md-6">
      <label htmlFor="fare" className="form-label">Fare</label>
      <input type="number" className="form-control" id="fare" name="fare" placeholder="Fare" onChange={inputChangeHandler} />
    </div>
    <div className="row-md-6">
      <label htmlFor="duration" className="form-label">Duration</label>
      <input type="number" className="form-control" id="duration" name="duration" placeholder="Duration" onChange={inputChangeHandler} />
    </div>
    <div className="col-12 text-center">
      <button type="submit" className="btn btn-primary">UPDATE</button>
    </div>
  </form>
</div>

  );
};

export default Edit;