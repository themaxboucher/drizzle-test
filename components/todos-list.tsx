"use client";

import { trpc } from "@/app/providers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TodoCard } from "@/components/todo-card";
import { Circle } from "lucide-react";

export function TodosList() {
  const todosQuery = trpc.todo.getAll.useQuery();

  if (todosQuery.isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (todosQuery.isError) {
    return (
      <Card className="border-destructive">
        <CardContent className="pt-6">
          <p className="text-destructive">
            Error loading todos. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (todosQuery.isSuccess && todosQuery.data) {
    if (todosQuery.data.length === 0) {
      return (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Circle className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium text-muted-foreground">
                No todos yet
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Get started by creating your first todo
              </p>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="grid gap-4">
        {todosQuery.data.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }

  return null;
}

