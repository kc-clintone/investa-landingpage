import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
    <div className='min-h-screen mx-auto container justify-center items-center'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
