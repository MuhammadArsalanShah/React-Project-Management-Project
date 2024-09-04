import NewTask from "./NewTask.jsx";

export default function Tasks({ onAdd, onDelete, thisProject }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {thisProject.projectTasks.length === 0 && (
        <p className="italic text-sm text-stone-500 my-4">
          *This project does not have any tasks yet.
        </p>
      )}
      {thisProject.projectTasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {thisProject.projectTasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
