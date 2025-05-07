import { Flex } from 'antd'
import 'app/style/App.scss'
import { Footer } from 'features/Footer'
import { Header } from 'features/Header'
import { Home } from 'features/Home'

export const App = () => {
  return (
    <Flex vertical className='container'>
      <Header />
      <Home />
      <div style={{ height: 800 }}></div>
      <Footer />
    </Flex>
  )
}
