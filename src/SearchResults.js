import React from "react";
import moment from "moment";

const SearchResults = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-In Date</th>
          <th scope="col">Check-Out Date</th>
          <th scope="col">Nights Spent</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(
          ({
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate,
          }) => {
            return (
              <tr>
                <th key={id} scope="row">
                  {id}
                </th>
                <td key={id}>{title}</td>
                <td key={id}>{firstName}</td>
                <td key={id}>{surname}</td>
                <td key={id}>{email}</td>
                <td key={id}>{roomId}</td>
                <td key={id}>{checkInDate}</td>
                <td key={id}>{checkOutDate}</td>
                <td key={id}>
                  {moment(checkOutDate).diff(checkInDate, "days")}
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
