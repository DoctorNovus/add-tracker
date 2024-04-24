import { useContext, useState } from "react";
import { useTasks, filterBroken } from "@/hooks/tasks";
import { taskContext } from "@/hooks/contexts";
import { sortByDate } from "@/utils/data";

import DayTasks from "../components/calendar/DayTasks";
import ActiveCalendar from "../components/calendar/ActiveCalendar";
import TaskContainer from "@/components/menus/TaskContainer/TaskContainer";

export default function Task() {
  const [context, setContext] = useContext(taskContext);
  const [activeDate, setActiveDate] = useState(context.activeDate);

  console.log("CTX", context);

  const tasks = useTasks();
  
  return (
    <div className="w-full h-full bg-accent-black text-accent-white">
      {tasks.isLoading && <span>Loading...</span>}
      {tasks.isError && <span>{tasks.error.message}</span>}
      {tasks.isSuccess && (
        <div className="pb-12">
          <div className="flex flex-col items-center gap-2">
            <ActiveCalendar
              context={context}
              setContext={setContext}
              setActiveDate={setActiveDate}
            />
            <DayTasks
              day={context.activeDate}
              tasks={sortByDate(filterBroken(tasks.data))}
            />
            <TaskContainer
              title="All Tasks"
              tasks={sortByDate(filterBroken(tasks.data))}
              activeFilter="dailyTasks"
            />
          </div>
        </div>
      )}
    </div>
  );
}
