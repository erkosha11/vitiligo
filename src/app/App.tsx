import 'app/style/App.scss'
import { Header } from 'features/Header'

export const App = () => {
  return (
    <div className='container'>
      <Header />
      <div style={{ height: 800 }}></div>
    </div>
  )
}
