import React, { useEffect, useState } from "react";
import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
const StateWise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    // const res = await fetch("https://api.covid19india.org/data.json");
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA </span>{" "}
            <span className="covid-19">COVID-19</span> Dashboard
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th> State </th>
                <th> Confirmed </th>
                <th> recover </th>
                <th> deaths </th>
                <th> active </th>
                <th> updated </th>
              </tr>
            </thead>

            <tbody>
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <td>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StateWise;
