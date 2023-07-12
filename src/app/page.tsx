import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, Welcome back!!!</h1>
      <Link href={"/tasks"} className={styles.taskButton}>
        move to tasks
      </Link>
    </div>
  );
}
