import React from "react"

type FormProps = {
  addTask: (name: string) => void
}

export default function Form({ addTask }: FormProps) {
  const [name, setName] = React.useState<string>("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    setName(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addTask(name)
    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        type="text"
        onChange={handleChange}
        placeholder="todoを入力してください"
      />
      <button type="submit">追加</button>
    </form>
  )
}
