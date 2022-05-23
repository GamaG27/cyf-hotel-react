import React, { useState } from "react";
import moment from "moment";

const RowChangeColor = props => {
  const [selected, setIsSelected] = useState(false);
  function onClicker() {
    setIsSelected(!selected);
  }
  const checkIn = moment(booking.checkInDate);
  const checkOut = moment(booking.checkOutDate);
  const nightsCalculation = checkOut.diff(checkIn, "days");
  return (
    <tr className={selected ? "hightlightRow" : ""} onClick={onClicker}>
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{props.nightsCalculation}</td>
    </tr>
  );
};

export default RowChangeColor;
