import { useContext, useState } from 'react';
import './AddTaskModal.scss';
import { AppContext } from '../../context/AppProvider';
import { generateId } from '../../helpers/app-helpers';

interface ITodoForm {
  title: string;
}

const AddTaskModal: React.FC<{
  close: () => void;
}> = ({
  close
}) => {

    const { addToTasks } = useContext(AppContext);
    const [showError, setShowError] = useState(false);

    function formAction(formData: FormData) {
      const formValues = {
        title: formData.get('title')
      } as ITodoForm;

      if (!formValues.title) {
        setShowError(true);
        return;
      }

      addToTasks({ id: generateId(), title: formValues.title, isComplete: false });
      close();
    }

    return (
      <>
        <div className="mask" onClick={close} />
        <div className="add-task-modal">
          <h2>Add A New Task</h2>
          <form className="add-task-modal__form" action={formAction}>
            <label htmlFor="title">Title</label>
            <input name="title" />

            {showError && <p className="add-task-modal__form__error">Please enter a title for this task.</p>}

            <div className="add-task-modal__form__btns">
              <button onClick={close}>CANCEL</button>
              <button type="submit">ADD</button>
            </div>
          </form>
        </div>
      </>
    )
  }

export default AddTaskModal;