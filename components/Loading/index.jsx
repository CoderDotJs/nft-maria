import React from "react";
import styles from "../../styles/Loading.module.css";

const index = () => {
  return (
    <div className={styles.mesh_loader}>
      <div className={styles.set_one}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.set_two}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default index;
