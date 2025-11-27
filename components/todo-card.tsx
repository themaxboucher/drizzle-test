import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

type Todo = {
  id: number;
  title: string;
  completed: string | null;
  createdAt: Date | string | null;
  projectId: number | null;
};

type TodoCardProps = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-3">
          {todo.completed === "true" ? (
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
          ) : (
            <Circle className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
          )}
          <div className="flex-1">
            <CardTitle
              className={
                todo.completed === "true"
                  ? "line-through text-muted-foreground"
                  : ""
              }
            >
              {todo.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      {todo.createdAt && (
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Created{" "}
            {new Date(todo.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </CardContent>
      )}
    </Card>
  );
}

