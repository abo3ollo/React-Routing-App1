
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <Navbar/>
      <main style={{ paddingTop: '100px' }}> {/* Adjust to your navbar height */}
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
