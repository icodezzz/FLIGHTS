import React, {useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Link, useNavigate} from 'react-router-dom';
import "./Add.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Add= ()=>{
    const flights = {
        airline : '',
        source : '',
        destination : '',
        fare : '',
        duaration : ''
    };

    const [flight, setflight] = useState(flights);
    const navigate = useNavigate();

    const inputHandler = (e)=>{
        const {name, value} = e.target;
        setflight({...flight, [name]:value})
    }

    const submitForm = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", flight)
        .then((response)=>{
            toast.success(response.data.msg, {position : "top-right"});
            navigate("/");
        }).catch((error)=> console.log(error));
    }

    return(
        <div>
            <Link to={"/"}>Back</Link>
            <h3>Add New Flight</h3>
            <form onSubmit={submitForm}>
            <div className="container">
  <div className="form-group row">
    <label className="col-sm-2 col-form-label"  htmlFor="airline">Airline</label>
    <div className="col-sm-10">
      <input
        type="text"
        onChange={inputHandler}
        className="form-control"
        id="airline"
        name="airline"
        placeholder="Airline"
      />
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label" htmlFor="source">Source</label>
    <div className="col-sm-10">
      <input
        type="text"
        onChange={inputHandler}
        className="form-control"
        id="source"
        name="source"
        placeholder="Source"
      />
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label" htmlFor="destination">Destination</label>
    <div className="col-sm-10">
      <input
        type="text"
        onChange={inputHandler}
        className="form-control"
        id="destination"
        name="destination"
        placeholder="Destination"
      />
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label" htmlFor="fare">Fare</label>
    <div className="col-sm-10">
      <input
        type="number"
        onChange={inputHandler}
        className="form-control"
        id="fare"
        name="fare"
        placeholder="Fare"
      />
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label" htmlFor="duration">Duration</label>
    <div className="col-sm-10">
      <input
        type="number"
        onChange={inputHandler}
        className="form-control"
        id="duration"
        name="duration"
        placeholder="Duration"
      />
    </div>
  </div>
</div>

                <div class="label label-default">
                    <button id='btn' type='submit'>Add Flight</button>
                </div>
            </form>
        </div>
    )
}

export default Add;