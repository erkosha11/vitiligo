import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { StrictMode } from 'react'
import 'antd/dist/reset.css'
import './style/index.scss'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </StrictMode>
)
