import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

export const Layout = ({children}) => {
  return (
    <div className='min-h-screen mx-auto justify-center items-center'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
