import { Container, FileInput } from '@mantine/core'
import React from 'react'
import { addFile } from '../actions/filesAction'
import { useDispatch } from 'react-redux'

function Home() {

  const dispatch = useDispatch()

  return (
    <Container >
      <FileInput placeholder='Enter file' onChange={(file) => dispatch(addFile(file))} />
    </Container>
  )
}

export default Home