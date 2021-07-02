import React from 'react'
import styled from 'styled-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { BiFile, BiText } from 'react-icons/bi'

const AddPost = () => {
  const [value, setValue] = React.useState('')

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  }

  return (
    <>
      <Wrapper>
        <InputGroup>
          <BiText className='icon' />
          <Input placeholder='title' />
        </InputGroup>
        <InputGroup>
          <BiFile className='icon' />
          <Input placeholder='small intro' />
        </InputGroup>

        <InputGroup>
          <ReactQuill
            theme='snow'
            modules={modules}
            value={value}
            onChange={setValue}
          />
        </InputGroup>
      </Wrapper>
    </>
  )
}

export default AddPost

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  padding: 0 10px;
  margin-top: 1rem;
  align-items: center;
  flex-direction: row;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.hover};

  .icon {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
  }

  .quill {
    width: 100%;
  }

  .ql-toolbar,
  .ql-snow {
    border: none;
  }
`

const Input = styled.input`
  flex: 1;

  border: none;
  outline: none;
  padding: 1rem;
  font-size: 1rem;
  color: var(--he);
  background: none;
`
