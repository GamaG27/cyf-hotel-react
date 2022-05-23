import React, { useState } from "react";
import RowChangeColor from "./RowChangeColor";
// import fakeBookings from "../data/fakeBookings";
//console.log(fakeBookings);

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(booking => {
          return <RowChangeColor booking={booking} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
