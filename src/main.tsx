import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import MainLayout from './app/mainLayout.tsx'
// import AppRoutes from './app/routes.tsx'
import App from './app/App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>,
)
