import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import VideoHeader from './components/header/VIdeoHeader.jsx';
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Office from './pages/Office';
import Donations from './pages/Donations';
import Main from './pages/Main'
import Trebi from './pages/Trebi'
import PersonCard from './components/person-card/PersonCard.jsx';
import FAQList from './components/FAQ-list/FAQList.jsx';
import FAQ from './pages/FAQ.jsx';

function App() {


    return (
        <div className='App'>
            <VideoHeader />
            <Header />
            <div className='main-container'>
                <div className='main-container-left'>
                    <FAQList />
                </div>
                <main>
                    <Router>
                        <Routes>
                            <Route exact path='/' element={<Main />} />
                            <Route exact path='/about' element={<About />} />
                            <Route exact path='/schedule' element={<Schedule />} />
                            <Route exact path='/office' element={<Office />} />
                            <Route exact path='/donations' element={<Donations />} />
                            <Route exact path='/trebi' element={<Trebi />} />
                            <Route exact path='/FAQ' element={<FAQ />} />
                            <Route path="*" element={<h3>Страница не существует или была удалена! Проверьте корректность вашего URL</h3>} />
                        </Routes>
                    </Router>
                </main>
                <div className='main-container-right'>
                    <PersonCard />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;