import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Register from '../pages/register';
import Main from '../pages/main';
import Character from '../pages/character';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App></App>} />
                <Route path="/login" element={<App></App>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path='/main' element={<Main></Main>}></Route>
                <Route path='/character/:nameOfHero' element={<Character></Character>}></Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;