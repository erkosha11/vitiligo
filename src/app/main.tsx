import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { StrictMode } from 'react'
import 'antd/dist/reset.css'
import './style/index.scss'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#fff'
          },
          components: {
            Button: {
              colorText: '#fff'
            }
          }
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
)
