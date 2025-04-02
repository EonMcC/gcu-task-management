import { FilterType } from "../components/task-list/filter/Filter";
import { ITask } from "./Task";

export interface IAppState {
  tasks: ITask[];
  filter: FilterType;
}