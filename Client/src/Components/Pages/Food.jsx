import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Food.css";

const Food = () => {
  const [foodName, setFoodName] = useState("");
  const [daySinceAt, setdaySinceAt] = useState(0);
  const [foodList, setfoodList] = useState([]);
  const [newFoodName,setnewFoodName] = useState("")
  const addToList = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/insert", {
      foodName: foodName,
      daySinceAt: daySinceAt,
    });
  };
  useEffect(() => {
  
    axios.get("http://localhost:3000/read").then((result) => {
      setfoodList(result.data);
      console.log("foodList" + foodList);
    });
  }, []);
  const updateFood=(id) =>{
    axios.put("http://localhost:3000/update",{
        id:id,
        newFoodName:newFoodName,
    })
  }
  const deleteFood=(id) =>{
    axios.delete(`http://localhost:3000/delete/${id}`)
  }

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <form className="bg-secondary p-4 w-50" method="post">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Add the Food
            </label>
            <input
              type="text"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setFoodName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Since you at
            </label>
            <input
              type="text"
              className="form-control  "
              id="exampleInputPassword1"
              onChange={(e) => {
                setdaySinceAt(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-warning text-warning"
            onClick={addToList}
          >
            Submit
          </button>
        </form>
      </div>
      <hr />
      <h2 className="text-center">Food List</h2>
      <div className="container bg-warning p-3">
        {foodList.length === 0 ? (
          <h2>no data</h2>
        ) : (
          foodList.map((data, key) => {
            return (
              <>
                {/* <div key={data._id} className="card-body">
                  <h1>{data.foodName}</h1>
                  <h1>{data.daySinceAt}</h1>
                </div> */}
                <div className="row d-flex justify-content-center m-3">
                  <div class="card " key={data._id}>
                    <div class="card-body">
                      <h5 class="card-title"> {data.foodName}</h5>
                      <h5 class="card-title"> {data.daySinceAt}</h5>

                       <input type="text"  className="form-control my-4" onclick={(e) =>{setnewFoodName(e.target.value)}}  placeholder="enter the newFoodName"/>

                      <button onClick={()=>{updateFood(data._id)}} className=" btn card-link btn-outline-success">
                        Update
                      </button>
                      <button onClick={()=>{deleteFood(data._id)}} className=" btn card-link btn-outline-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default Food;
