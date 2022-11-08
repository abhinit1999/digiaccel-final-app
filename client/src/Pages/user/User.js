import "./user.css";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

const User = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // const [category,setCategory]=useState("Random")
  const [ans, setAns] = useState({});
  // function handleSelect(event) {
  //   const { name, value } = event.target;
  //   if (name === "category") {
  //     setCategory(value);
  //   }
  // }

  const onChangeHandle = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setAns({ ...ans, [name]: value });
  };

  useEffect(() => {
    fetch("http://localhost:9000/all/questions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [ans]);

  // const postData = (e) => {
  //   e.preventDefault();

  //   fetch("http://localhost:9000/submit/ans", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //      ans
  //     }),
  //   });
  //   alert("Answer Submited");

  //   navigate("/user-dashboard")

  // };

  const postData = (e) => {
    e.preventDefault();

    const { question, cor_ans } = ans;
    fetch("http://localhost:9000/submit/ans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        cor_ans,
      }),
    });
    alert("Answer submited");

    navigate("/user-dashboard");
  };
  return (
    <div className="container">
      <div className="admin">
        <h1>
          User Panel
          <button
            style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "15px",
              backgroundColor: "darkblue",
            }}
            className="btn btn-primary btn-sm btn-block mx-2"
            type="submit"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              // navigate("/login");
              navigate("/");
            }}
          >
            Logout
          </button>
        </h1>
      </div>

      {data.map((vl, id) => {
        return (
          <form
            onSubmit={postData}
            style={{
              marginTop: "5rem",
            }}
          >
            <h2
              style={{
                color: "white",
              }}
            >
              {vl.question}
            </h2>
            <input
              type="radio"
              name="ans"
              value={vl.opt1}
              onChange={onChangeHandle}
            />
            <span
              style={{
                color: "white",
              }}
            >
              {vl.opt1}
            </span>{" "}
            <input
              type="radio"
              name="ans"
              value={vl.opt2}
              onChange={onChangeHandle}
            />
             <span
              style={{
                color: "white",
              }}
            >
              {vl.opt2}
            </span>{" "}{" "}
            <input
              type="radio"
              name="ans"
              value={vl.opt3}
              onChange={onChangeHandle}
            />
             <span
              style={{
                color: "white",
              }}
            >
              {vl.opt3}
            </span>{" "}{" "}
            <input
              type="radio"
              name="ans"
              value={vl.opt4}
              onChange={onChangeHandle}
            />
            <span
              style={{
                color: "white",
              }}
            >
              {vl.opt4}
            </span>{" "}{" "}
          </form>
          // <form onSubmit={postData} key={vl.id}>
          // <div className="que">
          //   {vl.question}
          // </div>
          //    <select className="category" name="category"
          //   value={category}
          //   onChange={handleSelect}
          //   >
          //     {/* <option value="Random"  key={vl.id}></option> */}
          //     <option value={vl.opt1}  key={vl.id}>{vl.opt1}</option>
          //     <option value={vl.opt2}  key={vl.id}>{vl.opt2}</option>
          //     <option value={vl.opt3}  key={vl.id}>{vl.opt3}</option>
          //     <option value={vl.opt4}  key={vl.id}>{vl.opt4}</option>

          //   </select>
          // </form>
        );
      })}

      <button type="submit" className="submit">
        Submit
      </button>
    </div>
  );
};

export default User;
