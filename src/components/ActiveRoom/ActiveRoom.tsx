import React, { FC } from "react";

type Room = {
  title: string;
  date: string;
  seatsLeaft: number;
  difficulty: string;
  owner: Avatar;
};

type Avatar = {
  name: string;
  img: string;
};
const ActiveRoom: FC<Room> = () => {
  return <div className="room" />;
};

export default ActiveRoom;
