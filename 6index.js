const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Закончить проект",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Сходить на тренировку",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Погулять с собакой",
  },
];
const createTaskItem = (taskId, taskText) => {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";
  taskItem.dataset.taskId = taskId;

  const mainContainer = document.createElement("div");
  mainContainer.className = "task-item__main-container";

  taskItem.append(mainContainer);

  const mainContent = document.createElement("div");
  mainContent.className = "task-item__main-content";

  mainContainer.append(mainContent);

  const checkboxForm = document.createElement("form");
  checkboxForm.className = "checkbox-form";

  mainContent.append(checkboxForm);

  const formInput = document.createElement("input");
  formInput.type = "checkbox";
  formInput.className = "checkbox-form__checkbox";
  const inputId = `task-${taskId}`;
  formInput.id = inputId;

  checkboxForm.append(formInput);

  const labelCheckbox = document.createElement("label");
  labelCheckbox.htmlFor = inputId;

  checkboxForm.append(labelCheckbox);

  const textOftasks = document.createElement("span");
  textOftasks.className = "task-item__text";
  textOftasks.innerText = taskText;
  mainContent.append(textOftasks);

  const deleteButton = document.createElement("button");
  deleteButton.className =
    "task-item__delete-button default-button delete-button";
  deleteButton.dataset.deleteTaskId = taskId;
  deleteButton.innerText = "Удалить";
  mainContainer.append(deleteButton);

  return taskItem;
};

const createModalOverlay = () => {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = `modal-overlay`;

  const deleteModal = document.createElement("div");
  deleteModal.className = "delete-modal";

  modalOverlay.append(deleteModal);

  const deleteModalQuestion = document.createElement("h3");
  deleteModalQuestion.className = "delete-modal__question";
  deleteModalQuestion.innerText = "Вы действительно хотите удалить эту задачу?";

  deleteModal.append(deleteModalQuestion);

  const deleteModalButtons = document.createElement("div");
  deleteModalButtons.className = "delete-modal__buttons";

  deleteModal.append(deleteModalButtons);

  const cancelButton = document.createElement("button");
  cancelButton.className = "delete-modal__button delete-modal__cancel-button";
  cancelButton.innerText = "Отмена";

  deleteModalButtons.append(cancelButton);

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-modal__button delete-modal__confirm-button";
  deleteButton.innerText = "Удалить";

  deleteModalButtons.append(deleteButton);
  tasksList.prepend(modalOverlay);
  return modalOverlay;
};
const errorMessage = (errorText) => {
  const errorMessageBlock = document.createElement("span");
  errorMessageBlock.className = "error-message-block";
  errorMessageBlock.textContent = errorText;

  createTaskBlock.append(errorMessageBlock);
};
const tasksList = document.querySelector(".tasks-list");
tasks.forEach((task) => {
  //получаем такски из массива
  const taskItem = createTaskItem(task.id, task.text);
  tasksList.append(taskItem);
});

const createTaskBlock = document.querySelector(".create-task-block");
createTaskBlock.addEventListener("submit", (event) => {
  const errorMessageBlock = document.querySelector(".error-message-block");
  if (errorMessageBlock) {
    //если блок с ошибкой есть, удаляем его
    errorMessageBlock.remove();
  }
  event.preventDefault(); // убираем дефолтный функционал обработчика событий
  const id = new Date().getTime(); // генерируем уникальный id через мс
  const { target } = event;
  const inputValue = target.taskName.value.trim(); //ловим текст в инпуте
  const isTaskExists = tasks.some((task) => task.text === inputValue); // если есть совпадение в тасках, возвращаем его
  if (!inputValue) {
    errorMessage("Название задачи не должно быть пустым");
  } else if (isTaskExists) {
    errorMessage("Задача с таким названием уже существует.");
  } else if (inputValue && !isTaskExists) {
    const newTask = {
      id: `${id}`,
      completed: false,
      text: inputValue,
    };
    tasks.push(newTask);
    const taskItem = createTaskItem(id, inputValue);
    tasksList.append(taskItem);
  }
});

tasksList.addEventListener("click", (event) => {
  const { target } = event;
  const isButton = target.closest(".task-item__delete-button");
  if (isButton) {
    //при клике на кнопку Удалить всплывает модальное окно проверки
    createModalOverlay();
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.addEventListener("click", (event) => {
      event.preventDefault();
      const { target } = event;

      const isButtonCansel = target.closest(".delete-modal__cancel-button");
      const isButtonDelete = target.closest(".delete-modal__confirm-button");
      if (isButtonCansel) {
        //если отмена, то модальноеокно удаляем
        modalOverlay.remove();
      } else if (isButtonDelete) {
        const id = isButton.dataset.deleteTaskId;
        document.querySelector(`[data-task-id="${id}"]`).remove();
        const indexTask = tasks.findIndex((task) => task.id === id);
        tasks.splice(indexTask, 1);
        modalOverlay.remove();
      }
    });
  }
});

let isDark = false;

window.addEventListener("keydown", (event) => {
  const { key } = event;

  if (key === "Tab") {
    event.preventDefault();
    isDark = !isDark;
    if (isDark) {
      document.body.style.background = "#24292E";
      const taskItem = document.querySelectorAll(".task-item");
      taskItem.forEach((taskItem) => {
        taskItem.style.color = "#ffffff";
      });
      const buttonHTML = document.querySelectorAll("button");
      buttonHTML.forEach((button) => {
        button.style.border = "1px solid #ffffff";
      });
    } else {
      document.body.style.background = "initial";
      const taskItem = document.querySelectorAll(".task-item");
      taskItem.forEach((taskItem) => {
        taskItem.style.color = "initial";
      });
      const buttonHTML = document.querySelectorAll("button");
      buttonHTML.forEach((button) => {
        button.style.border = "none";
      });
    }
  }
  return;
});
