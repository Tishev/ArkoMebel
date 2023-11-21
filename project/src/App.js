import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { paths } from './paths';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={paths.home} element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
