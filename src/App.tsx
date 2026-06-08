import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
