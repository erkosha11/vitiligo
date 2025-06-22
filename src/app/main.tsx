import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { App } from './App.tsx'
import './styles/index.scss'
import 'antd/dist/reset.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </BrowserRouter>
)
