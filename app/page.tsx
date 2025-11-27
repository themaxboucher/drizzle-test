"use client";

import { trpc } from "@/app/providers";

export default function Page() {
  const todosQuery = trpc.todo.getAll.useQuery();
  console.log("todos:", todosQuery.data);

  return (
    <div className="p-4">
      <h1>Todos</h1>
      <ul>
        {todosQuery.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

