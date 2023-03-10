import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("firstName"));
  console.log(searchParams.get("age"));
  const reset = () => {
    setSearchParams({ firstName: "Keshaun" });
    setSearchParams({ age: 34 });
  };
  
  
  
  useEffect(() => {
    async function getData() {
      let getapi = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords
         =1&idStarts=${userId}`
      );

      const res = await getapi.json();
      setData(res[0]);
    }
    getData();
  }, []);
  return (
    <>
      <h1>{data.userId}</h1>
      <h1>{data.firstName}</h1>
      <h1>{data.lastName}</h1>
      <h1>{data.email}</h1>
      <h1>{data.contactNumber}</h1>
      <h1>{data.age}</h1>
      <h1>{data.dob}</h1>
      <h1>{data.address}</h1>
    </>
  );
};

export default UserDetails;
