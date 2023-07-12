"use client";

import { Modal } from "@mui/material";
import { Fragment, useState } from "react";
import styles from "./styles.module.css";
import addTaskToDatabase from "@/actions/serverActions";

export default function FormModal() {

  return (
    <Fragment>
        <div className={styles.createNewModal}>
          <form action={addTaskToDatabase} method="post">
            <input
              type="text"
              name="task_name"
              placeholder="task name"
              className={styles.input}
            />
            <input
              type="text"
              name="desc"
              placeholder="task description"
              className={styles.input}
            />
            <button
              type="submit"
              className={styles.submitBtn}
            >
              submit
            </button>
          </form>
        </div>
    </Fragment>
  );
}
