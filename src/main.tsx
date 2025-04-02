import { createRoot } from 'react-dom/client'
import './index.scss'
import './theme.scss'
import App from './App.tsx'
import { AppProvider } from './context/AppProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>,
)
