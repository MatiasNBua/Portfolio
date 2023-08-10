import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import './App.css';

function App() {

  return (
    <div className="container-app">
      <Header/>
      <Body />
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}

export default App;
