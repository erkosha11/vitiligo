import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { ConfigProvider, theme } from 'antd'
import 'app/style/index.scss'
import 'i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorLink: '#8c8c8c',
          colorLinkActive: '#98768b',
          colorLinkHover: '#98768b',
          colorPrimary: '#98768b',
          colorText: '#8c8c8c'
        },
        components: {
          Typography: {
            colorText: '#8c8c8c'
          },
          Segmented: {
            itemSelectedBg: '#98768b',
            itemSelectedColor: '#fff',
            itemHoverColor: '#fff'
          },
          Select: {
            optionSelectedColor: '#ffffff'
          },
          Button: {
            colorBgBase: '#fff'
          }
        }
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
)
