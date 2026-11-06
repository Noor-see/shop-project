import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import toast,{Toaster} from 'react-hot-toast'
import ShppingCartContextProvider from './Components/Context/ShppingCartContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShppingCartContextProvider>
      <App />
    </ShppingCartContextProvider>
  </StrictMode>,
)
