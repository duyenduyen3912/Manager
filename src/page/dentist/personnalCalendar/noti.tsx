import { Button } from "antd";
import styles from "./styles.module.scss";
interface NotiProps {}

const Noti = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.notiWrap}>
          <div className={styles.header}>
            <div className={styles.wrappImg}>
              <img
                className={styles.img}
                src={require("../../../assets/img/logo.png")}
              />
            </div>
            <h3 className={styles.title}>Thông báo</h3>
          </div>
          <div className={styles.list}>list</div>
          <button className={styles.btnDetail}>Chi tiết</button>
        
        </div>
      </div>
    </>
  );
};

export default Noti;
