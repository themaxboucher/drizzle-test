import { TodosList } from "@/components/todos-list";
import { ListTodo } from "lucide-react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-4xl p-6 space-y-6">
      <div className="flex items-center gap-3">
        <ListTodo className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Todos</h1>
      </div>

      <TodosList />
    </div>
  );
}

