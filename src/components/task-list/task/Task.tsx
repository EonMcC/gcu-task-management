/// <reference types="vite-plugin-svgr/client" />
import React, { useContext } from 'react';
import './Task.scss';
import { ITask } from '../../../interfaces/Task';
import { AppContext } from '../../../context/AppProvider';
import Trash from '../../../assets/trash.svg?react';

const Task: React.FC<{ task: ITask }> = ({ task }) => {

  const { removeFromTasks, updateTask } = useContext(AppContext);

  function onCompleteClick() {
    updateTask(task.id);
  }

  function onDeleteClick() {
    removeFromTasks(task.id);
  }

  return (
    <div className="task">
      <button
        className={task.isComplete ? "task__checkbox  task__checkbox--complete" : "task__checkbox"}
        onClick={onCompleteClick}
      >
        {task.isComplete ? "DONE!" : ""}
      </button>

      <p className={task.isComplete ? "task__title task__title--complete" : "task__title"}>{task.title}</p>

      <Trash className="task--trash" onClick={onDeleteClick} />
    </div>
  )
}

export default Task;