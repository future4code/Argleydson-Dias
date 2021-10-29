import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'


const NewPostForm = (props) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const createPost = () => {
    props.handleCreatePost(text, title);
  }

  return (
    <>
      <TextField
        placeholder={"Título do Post"}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        placeholder={"Texto do Post"}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button onClick={createPost}>Criar Novo Post!</Button>
    </>
  )
}

export default NewPostForm;
