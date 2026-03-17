import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};