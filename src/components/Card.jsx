import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="border-2 m-10 p-10 shadow-xl flex-col rounded justify-center items-center hover:shadow-2xl hover:shadow-indigo-500/40">
        <div className="flex justify-between items-center mr-[30px] ">
          <img
            className="rounded-full border-2 h-[75px]"
            src={props.avatar}
            alt="avatar"
          />
          <h3 className="font-semibold text-lg">{props.id}</h3>
        </div>

        <h2 className="text-lg font-bold mt-3">
          {props.first_name} {props.last_name}
        </h2>

        <h3 className="font-semibold"> Gender: {props.gender}</h3>
        <h4>
          {props.email} <br />
          Domain: {props.domain} <br />
        </h4>
      </div>
    </>
  );
};

export default Card;
