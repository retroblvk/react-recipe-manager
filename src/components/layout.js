import Navbar from './navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className='content container'>{children}</main>
  </>
);

export default Layout;
