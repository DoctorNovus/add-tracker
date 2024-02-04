import { useState } from "react";
import { useTasks, useAddTask } from "@/hooks/tasks";
import { ToDoItem } from "../components/todo/ToDoItem";
import ToDoAddMenu from "../components/menus/ToDoAdd/ToDoAddMenu";
import ToDoViewer from "../components/menus/ToDoViewer";
import ActiveCalendar from "../components/calendar/ActiveCalendar";
import DayTasks from "../components/calendar/DayTasks";
import Layout from "./Layout";
import TaskMenu from "@/components/tasks/TaskMenu";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const tasks = useTasks();
  const navigate = useNavigate();

  const [activeDate, setActiveDate] = useState(new Date());

  return (
    <div className="w-full h-full bg-accent-black text-accent-white">
      {tasks.isLoading && <span>Loading...</span>}
      {tasks.isError && <span>{tasks.error.message}</span>}
      {tasks.isSuccess && (
        <div>
          <div className="flex flex-col items-center">
            <ActiveCalendar
              activeDate={activeDate}
              setActiveDate={setActiveDate}
            />
            <DayTasks day={activeDate} tasks={tasks.data} />
            <div>
              <h1 className="text-xl mt-2 mb-1">General Tasks</h1>
              <TaskMenu tasks={tasks.data} />
            </div>
          </div>
          <div>
            <div className="w-full h-16 flex justify-center items-center fixed bottom-3">
              <button
                onClick={() => navigate("/todo/add")}
                className="flex text-center justify-center items-center w-10 h-10 text-3xl bg-blue-600 rounded-full text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
