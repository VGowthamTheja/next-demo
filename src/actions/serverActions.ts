"use server";

import { revalidatePath } from "next/cache";

const addTaskToDatabase = async (e: FormData) => {
  const task_name = e.get("task_name")?.toString();
  const desc = e.get("desc")?.toString();

  await fetch("http://localhost:3000/api/addTask", {
    method: "POST",
    body: JSON.stringify({ task_name, desc }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/tasks");
  e.delete("task_name");
  e.delete("desc");
};

export default addTaskToDatabase;
