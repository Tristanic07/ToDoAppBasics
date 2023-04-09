import { useState } from "react";

export default function App() {
  const [toDoList, setToDoList] = useState<string[]>([]);
  const [newToDoItem, setNewToDoItem] = useState<string>("");

  function addButtonClick() {
    if (newToDoItem !== "") {
      setToDoList([...toDoList, newToDoItem]);
      setNewToDoItem("");
    }
  }

  function resetButtonClick() {
    setToDoList([]);
  }

  function deleteButtonClick(index: number) {
    const updatedList = [...toDoList];
    updatedList.splice(index, 1);
    setToDoList(updatedList);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewToDoItem(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      addButtonClick();
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline ">ToDo App in ReactJS</h1>

      <div className="mt-10 w-96">
        {toDoList.length === 0 ? (
          <div className="bg-red-400 h-10 flex justify-center items-center w-96">
            <h1 className="text-white">No Task Available</h1>
          </div>
        ) : (
          <ul className="w-96 ">
            <div className="bg-green-400 h-10 flex justify-center items-center w-96 mb-2">
              <h1 className="text-white">Task ToDo</h1>
            </div>
            {toDoList.map((item, index) => (
              <li
                key={index}
                className="hover:bg-red-400 border-b-2 gap-5 flex justify-between"
              >
                <h1>{index + 1}.</h1>

                <h1 className="w-48 overflow-hidden overflow-ellipsis">
                  {item}
                </h1>
                <button
                  className="h-7 w-14 bg-red-700"
                  onClick={() => deleteButtonClick(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center mt-5 overflow-hidden">
        <input
          type="text"
          className="pl-1 h-7 border-2 border-gray-400 rounded-sm "
          placeholder="Freaking Todo"
          value={newToDoItem}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="flex gap-1">
          <button
            className="h-7 w-24 bg-green-500 text-white"
            onClick={addButtonClick}
          >
            + Add toDo
          </button>
          <button
            className="h-7 w-24 bg-red-500 text-white"
            onClick={resetButtonClick}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
