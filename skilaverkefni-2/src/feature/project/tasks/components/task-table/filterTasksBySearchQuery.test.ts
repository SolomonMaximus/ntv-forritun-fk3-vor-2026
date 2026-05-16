import { describe, expect, it } from "vitest";
import { filterTasksBySearchQuery } from "./filterTasksBySearchQuery";
import type { Task } from "@/feature/project/tasks/model/task";

const tasks: Task[] = [
  {
    id: "task-1",
    title: "Write report",
    description: "Finish the school report",
    completed: false,
    priority: "high",
    projectId: "project-1",
  },
  {
    id: "task-2",
    title: "Buy supplies",
    description: "Get paper and pens",
    completed: false,
    priority: "medium",
    projectId: "project-1",
  },
  {
    id: "task-3",
    title: "Clean desk",
    description: "Prepare workspace",
    completed: true,
    priority: "low",
    projectId: "project-1",
  },
];

describe("filterTasksBySearchQuery", () => {
  it("returns all tasks when the search query is empty", () => {
    expect(filterTasksBySearchQuery(tasks, "")).toEqual(tasks);
  });

  it("filters tasks by title", () => {
    expect(filterTasksBySearchQuery(tasks, "report")).toEqual([tasks[0]]);
  });

  it("filters tasks by description", () => {
    expect(filterTasksBySearchQuery(tasks, "paper")).toEqual([tasks[1]]);
  });

  it("filters tasks by priority", () => {
    expect(filterTasksBySearchQuery(tasks, "low")).toEqual([tasks[2]]);
  });

  it("ignores extra spaces and letter casing", () => {
    expect(filterTasksBySearchQuery(tasks, "  REPORT  ")).toEqual([tasks[0]]);
  });
});
