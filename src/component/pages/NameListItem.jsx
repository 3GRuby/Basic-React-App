import React from "react";
import "./NameListItem.css";
import moment from "moment";

function NameListItem(props) {
  return (
    <React.Fragment>
      <li className="list-group-item shadow-sm">
        <div className="row align-items-center">
          <div className="col-2">
            <img
              src={props.avatar}
              alt={props.name}
              className="border border-dark rounded-circle shadow-sm"
            />
          </div>
          <div className="col-10">
            <h4 className="redText">{props.name}</h4> {/* external css */}
            <p>
              {props.city} | {props.email}
            </p>
            <small>{moment(props.birthday).format("DD-MM-YYYY")}</small>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default NameListItem;
