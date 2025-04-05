import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'app/style/index.scss'
import 'antd/dist/reset.css'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#a0708a',
          colorText: '#8C8C8C',
          colorTextHeading: '#a0708a',
          colorLink: '##8C8C8C',
          colorLinkHover: '#a0708a',
          colorLinkActive: '#4a2c3c'
        }
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
)
