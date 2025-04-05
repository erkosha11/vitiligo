import 'app/style/App.scss'
import { Footer } from 'features/Footer'
import { Header } from 'features/Header'

export const App = () => {
  return (
    <div className='container'>
      <Header />
      <div style={{ height: 10 }} />
      <div style={{ height: 750 }} />
      <Footer />
    </div>
  )
}
