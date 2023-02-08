import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let getapi = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords
         =${state}&idStarts=`
      );

      const res = await getapi.json();
      setData(res);
    }
    getData();
  }, [state]);
  return (
    <div>
      <button className="btn" onClick={() => setState(state + 1)}>
        {state}
      </button>
      {data.map((element, index) => {
        return (
          <>
            <Link to={`/home/${element.id}`}>
              <div className="data" key={index}>
                <h1>{element.firstName}</h1>
                <h1>{element.lastName}</h1>
              </div>
            </Link>
          </>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Home;
