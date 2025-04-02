import { useContext, useEffect, useState } from 'react';
import './TaskList.scss';
import Task from './task/Task';
import { AppContext } from '../../context/AppProvider';
import { ITask } from '../../interfaces/Task';
import Filter from './filter/Filter';

const TaskList = () => {

  const { tasks, filter } = useContext(AppContext);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter(task => {
        if (filter === "COMPLETE") return task.isComplete;
        if (filter === "PENDING") return !task.isComplete;
        return task;
      })
    )
  }, [tasks, filter])

  return (
    <div className="task-list">

      {filteredTasks.length < 1 && <p>Filtered task list is empty.</p>}

      {filteredTasks.map(task => {
        return <Task task={task} key={task.id} />
      })}

      {tasks.length > 0 && <Filter />}
    </div>
  )
}

export default TaskList;