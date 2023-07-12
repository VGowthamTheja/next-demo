import { Task } from "@/lib/types";

export default async function TaskComponent() {
  const res = fetch("http://localhost:3000/api/getData", {
    cache: "no-cache",
    next: {
      tags: ["api/getData"],
    },
  }).then((res) => {
    return res.json();
  });

  const data = await res;

  if (!data) return <p>No profile data</p>;

  return (
    <div className="flex flex-wrap gap-5">
      {data.map((task: Task) => (
        <div key={task.id} className="p-5 shadow">
          <p>{task.task_name}</p>
        </div>
      ))}
    </div>
  );
}
