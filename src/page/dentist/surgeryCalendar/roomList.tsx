import React from "react";
import Room from "./room";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);

interface RoomListProps {
  rooms: string[];
  // bookedRooms: string[];
  // onBookRoom: (roomName: string) => void;
}

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  // onBookRoom,
}) => {
  return (
    <div className={styles.roomName}>
      {" "}
      <Row>
        {rooms.map((roomName) => (
          <Col span={6} className={styles.room}>
            <Room
              key={roomName}
               roomName={roomName}
              // onBookRoom={() => onBookRoom(roomName)}
            />
          </Col>
        ))}{" "}
      </Row>
    </div>
  );
};

export default RoomList;
