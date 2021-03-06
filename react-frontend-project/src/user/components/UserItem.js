import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <ul className="user-item">
      <div>
        <Card className="user-item__content"> 
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            {/* <img src={props.image} alt={props.name}></img> */}
            <Avatar image={props.image} alt={props.name} />
          </div>

          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCOunt === 1 ? "Place" : "Places"}{" "}
            </h3>
          </div>
        </Link>
        </Card>
      </div>
    </ul>
  );
};

export default UserItem;
