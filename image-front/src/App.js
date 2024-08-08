import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Board from './component/Board';
import Profile from './component/Profile';
import Main from './component/Main';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Banner from './component/layout/Banner';


// front end api url 설정
// -> react router dom  Router

// front end api url
// Board path = "/board"
// Profile path = "/profile"

function App () {
    return (
    <Router>
        <Banner />
        <Header />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/board' element={<Board />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
    </Router>
    )
}

export default App;