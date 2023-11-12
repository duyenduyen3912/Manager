import React from "react";
import { useState } from "react";
import RoomList from "./roomList";
import styles from "./style.module.scss";
import { Col, Row } from "antd";
import { ROOMS, SHIFTS } from "../../../util/constant";
import AddSurgery from "../../../components/modal";

interface CalendarProps {
  dates: string[];
  filter: any;
  // roomsData: { [key: string]: { bookedRooms: string[] } };
  // onBookRoom: (date: string, roomName: string) => void;
}
// const shifts = ["8AM", "8AM", "kíp 3", "kíp 4"];
// const rooms = ["PT1", "PT2", "PT3", "PT4"];

const CalendarCustom: React.FC<CalendarProps> = ({
  dates,
  filter,
  // roomsData,
  // onBookRoom,
}) => {
  const value = (room: string, shift: string, date: string) => {
    return (
      room === "Nguyen Van A" &&
      shift === "Kíp 1" &&
      date === "2023-11-12-Sunday"
    );
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomName, setRoomName] = useState<string>();
  const showModal = (roomName: any) => {
    setIsModalOpen(true);

    // console.log(roomName);
    setRoomName(roomName);
  };

  const handlseModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.calendar}>
      <div className={styles.row}>
        <div className={styles.time}></div>
        {dates.map((date) => (
          <div key={date} className={styles.day}>
            <h2 className={styles.boder && styles.date}>{date}</h2>
            <div className={styles.roomList}>
              <RoomList
                rooms={ROOMS}
                // bookedRooms={roomsData[date]?.bookedRooms || []}
                // onBookRoom={(roomName) => onBookRoom(date, roomName)}
              />
            </div>
          </div>
        ))}
      </div>
      {SHIFTS.map((shift) => (
        <div className={styles.row} key={shift}>
          <div className={styles.time}>{shift}</div>{" "}
          {dates.map((date) => (
            <div key={date} className={styles.day}>
              <div className={styles.roomList}>
                <Row>
                  {ROOMS.map((room, index) => (
                    <Col
                      span={6}
                      key={index}
                      className={styles.record}
                      onClick={() => {
                        showModal(room);
                      }}
                    >
                      {value(room, shift, date) ? "Xin nghỉ" : 0}
                    </Col>
                  ))}{" "}
                </Row>
              </div>
            </div>
          ))}
        </div>
      ))}
      <AddSurgery
        visible={isModalOpen}
        onCancel={handleModalCancel}
        onOk={handlseModalOk}
        userName={roomName}
      />
    </div>
  );
};

export default CalendarCustom;
