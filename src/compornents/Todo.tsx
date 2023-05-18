import React, { useState } from "react"
import "./Todo.css"

type PropsTodoType = {
  id: string
  name: string
  completed: boolean
  toggleTaskCompleted: (id: string) => void
  deleteTask: (id: string) => void
  editTaskName: (id: string, newName: string) => void
}

export default function Todo({
  id,
  name,
  completed,
  toggleTaskCompleted,
  deleteTask,
  editTaskName,
}: PropsTodoType) {
  const [isnameEdit, setisnameEdit] = useState<boolean>(false)
  const [editedname, seteditedname] = React.useState<string>("")
  return (
    <li>
      {isnameEdit ? (
        <input
          type="text"
          onChange={(e) => {
            seteditedname(e.target.value)
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            console.log(editedname)
            if (e.key === "Enter") {
              editTaskName(id, editedname)
              console.log(editedname)
              setisnameEdit(false)
              seteditedname("")
            }
          }}
        />
      ) : (
        <span
          className={completed ? "strikethrough" : ""}
          onClick={() => setisnameEdit(true)}
        >
          {name}
        </span>
      )}

      <button
        onClick={() => {
          deleteTask(id)
        }}
      >
        削除
      </button>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={() => toggleTaskCompleted(id)}
      />
    </li>
  )
}
