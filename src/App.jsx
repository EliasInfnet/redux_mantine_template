import { MantineProvider } from '@mantine/core'
import Home from './pages/Home'

function App() {

  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Home />
    </MantineProvider>
  )
}

export default App
