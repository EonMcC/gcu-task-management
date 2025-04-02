import { useState } from 'react'
import TaskList from './components/task-list/TaskList'
import AddTaskModal from './components/add-task-modal/AddTaskModal';

function App() {

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  function toggleAddTaskModal() {
    setShowAddTaskModal(!showAddTaskModal);
  }

  return (
    <>
      <h1>GCU Task Management</h1>

      <button onClick={toggleAddTaskModal}>+ Add Task</button>

      <TaskList />

      {showAddTaskModal && <AddTaskModal close={toggleAddTaskModal} />}
    </>
  )
}

export default App
