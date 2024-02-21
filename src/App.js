import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './styles/global.scss';
import './styles/normalize.scss';
import MainPage from './pages/MainPage';
import MoreProjects from './pages/MoreProjects';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={ <MainPage /> } />
                <Route path='/projects' element={ <MoreProjects /> } />
            </Routes>
        </div>
    );
}

export default App;
