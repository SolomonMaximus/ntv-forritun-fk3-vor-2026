import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TaskTableSearch } from "./TaskTableSearch";

const meta = {
  title: "Project/Tasks/TaskTableSearch",
  component: TaskTableSearch,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TaskTableSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const WithSearchText: Story = {
  args: {
    value: "report",
    onChange: () => {},
  },
};

export const Interactive: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
  render: () => {
    const [value, setValue] = useState("");

    return <TaskTableSearch value={value} onChange={setValue} />;
  },
};
