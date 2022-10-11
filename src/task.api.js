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

async function fetchAll() {
  return Promise.resolve(tasks);
}
export default fetchAll;
