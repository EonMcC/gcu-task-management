import { IAppState } from "../interfaces/AppState";

const KEY = 'gcu-task-management-local-storage';

export const saveToLocalStorage = (appState: IAppState) => {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...appState }));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const appStateStr = localStorage.getItem(KEY);
    return appStateStr ? JSON.parse(appStateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};