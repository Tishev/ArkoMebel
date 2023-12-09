import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { paths } from './paths';
import Home from './pages/Home';
import HeaderScreen from './components/headerScreen/HeaderScreen';
import ProgramBonus from './pages/ProgramBonus';
import SetAZS from './pages/SetAZS';
import Vacancies from './pages/Vacancies';
import ForYurLiz from './pages/ForYurLiz';
import Contacts from './pages/Contacts';
import PersonalCabinet from './pages/PersonalCabinet';

function App() {
    return (
        <Router>
            <HeaderScreen />
            <Routes>
                <Route path={paths.home} element={<Home />} />
                <Route path={paths.bonusProgram} element={<ProgramBonus />} />
                <Route path={paths.setAZS} element={<SetAZS />} />
                <Route path={paths.vacancies} element={<Vacancies />} />
                <Route path={paths.forYurLiz} element={<ForYurLiz />} />
                <Route path={paths.contacts} element={<Contacts />} />
                <Route path={paths.personalCabinet} element={<PersonalCabinet />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
