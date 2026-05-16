import { describe, expect, it } from "vitest";
import { globalReducer, initialState } from "./globalReducer";

describe("globalReducer", () => {
  it("adds a project", () => {
    const project = {
      id: "project-1",
      name: "Website project",
      description: "Build a website",
      tasksCount: 0,
    };

    const state = globalReducer(initialState, {
      type: "ADD_PROJECT",
      payload: { project },
    });

    expect(state.projects).toEqual([project]);
    expect(state.tasks).toEqual([]);
    expect(state.activeProject).toBeNull();
  });

  it("adds a task to a project and increases the project task count", () => {
    const project = {
      id: "project-1",
      name: "Website project",
      description: "Build a website",
      tasksCount: 0,
    };

    const task = {
      id: "task-1",
      title: "Write tests",
      description: "Add reducer tests",
      completed: false,
      priority: "medium" as const,
      projectId: project.id,
    };

    const startState = {
      projects: [project],
      tasks: [],
      activeProject: project,
    };

    const state = globalReducer(startState, {
      type: "ADD_TASK",
      payload: {
        projectId: project.id,
        task,
      },
    });

    expect(state.tasks).toEqual([task]);
    expect(state.projects[0].tasksCount).toBe(1);
    expect(state.activeProject?.tasksCount).toBe(1);
  });

  it("removes a task from a project and decreases the project task count", () => {
    const project = {
      id: "project-1",
      name: "Website project",
      description: "Build a website",
      tasksCount: 1,
    };

    const task = {
      id: "task-1",
      title: "Write tests",
      description: "Add reducer tests",
      completed: false,
      priority: "medium" as const,
      projectId: project.id,
    };

    const startState = {
      projects: [project],
      tasks: [task],
      activeProject: project,
    };

    const state = globalReducer(startState, {
      type: "REMOVE_TASK",
      payload: {
        taskId: task.id,
      },
    });

    expect(state.tasks).toEqual([]);
    expect(state.projects[0].tasksCount).toBe(0);
    expect(state.activeProject?.tasksCount).toBe(0);
  });
});

it("keeps a project when its task count is updated to zero", () => {
  const project = {
    id: "project-1",
    name: "Website project",
    description: "Build a website",
    tasksCount: 1,
  };

  const startState = {
    projects: [project],
    tasks: [],
    activeProject: project,
  };

  const state = globalReducer(startState, {
    type: "UPDATE_PROJECT_TASKS_COUNT",
    payload: {
      projectId: project.id,
      tasksCount: 0,
    },
  });

  expect(state.projects).toEqual([
    {
      ...project,
      tasksCount: 0,
    },
  ]);
  expect(state.activeProject).toEqual({
    ...project,
    tasksCount: 0,
  });
});
