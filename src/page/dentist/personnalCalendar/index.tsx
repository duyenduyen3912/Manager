import type { Dayjs } from "dayjs";
import React from "react";
import { Calendar, ConfigProvider, theme } from "antd";
import type { CalendarProps } from "antd";
import styles from "./styles.module.scss"
import Noti from "./noti";
import PatientList from "./patientList";
import PatientTable from "./patientTable";
const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
interface PersonalCalendarProps {}
const PersonalCalendar = () => {
  const { token } = theme.useToken();

  // const wrapperStyle: React.CSSProperties = {
  //   width: 300,
  //   borderRadius: token.borderRadiusLG,
  //   boxShadow: `0px 1px 4px 0px rgba(0, 0, 0, 0.25)`,
  // };
  return (
    <>
      <div className={styles.wrapper}>
        <ConfigProvider
          theme={{
            components: {
              Calendar: {
                colorPrimary: "#2db7f5",
              },
            },
          }}
        >
          <Calendar className={styles.wrap}
            fullscreen={false}
            onPanelChange={onPanelChange}
          />
        </ConfigProvider>
        <Noti />
        <PatientList/>
      </div>
      <div className={styles.wrap}>
        <PatientTable/>
      </div>
    </>
  );
};

export default PersonalCalendar;
