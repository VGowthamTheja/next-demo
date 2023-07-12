import styles from "./page.module.css";
import Link from "next/link";
import { Task } from "@/lib/types";
import FormModal from "@/components/FormModal";
import TaskComponent from "@/components/Task";

export default function Task() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Tasks</h1>
        <Link href={"/"} className={styles.back}>
          {"< Back "}
        </Link>
      </div>
      <div className={styles.formContainer}>
        <FormModal />
      </div>
      <div>
        <TaskComponent />
      </div>
    </div>
  );
}
