import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter} from "react-router-dom"
import { ChatProvider } from './context/ChatContext.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <ChatProvider>
    <App />
      </ChatProvider>
  </StrictMode>,
  </BrowserRouter>
)
