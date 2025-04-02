import { createContext, ReactNode, useEffect, useState } from "react";
import { ITask } from "../interfaces/Task";
import { loadFromLocalStorage, saveToLocalStorage } from "../helpers/storage-helper";
import { FilterType } from "../components/task-list/filter/Filter";

interface AppContextState {
  tasks: ITask[];
  filter: FilterType;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  addToTasks: (product: ITask) => void;
  removeFromTasks: (id: string) => void;
  updateTask: (id: string) => void;
  updateFilter: (filter: FilterType) => void;
}

const appState = {
  tasks: [],
  filter: "ALL" as FilterType,
  setTasks: () => [],
  addToTasks: () => [],
  removeFromTasks: () => [],
  updateTask: () => [],
  updateFilter: () => "ALL"
}

const AppContext = createContext<AppContextState>(appState);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<FilterType>("ALL");

  useEffect(() => {
    const localStorageData = loadFromLocalStorage();
    if (localStorageData) {
      setTasks(localStorageData.tasks);
      setFilter(localStorageData.filter);
    }
  }, [])

  useEffect(() => {
    saveToLocalStorage({
      tasks,
      filter
    })
  }, [tasks, filter])

  function addToTasks(task: ITask) {
    setTasks((prevState) => [
      ...prevState,
      task
    ])
  }

  function removeFromTasks(id: string) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function updateTask(id: string) {
    const tasksCopy = tasks.map(task => {
      if (task.id === id) return { ...task, isComplete: !task.isComplete };
      return task;
    })

    setTasks(tasksCopy);
  }

  function updateFilter(filter: FilterType) {
    setFilter(filter);
  }

  return (
    <AppContext.Provider value={{ tasks, filter, setTasks, addToTasks, removeFromTasks, updateTask, updateFilter }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext };