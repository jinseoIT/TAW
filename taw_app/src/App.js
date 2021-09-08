import './App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage';
import MapPage from './components/MapPage';
import FavoritePage from './components/FavoritePage';
import BulletinPage from './components/BulletinPage'
import Header from './components/common/Header';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import UploadPage from './components/admin/uploadPage';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"> <LandingPage /> </Route>
          <Route path="/detail"> <DetailPage /> </Route>
          <Route path="/map"> <MapPage/> </Route>
          <Route path="/favorite"> <FavoritePage/> </Route>
          <Route path="/bulletin"> <BulletinPage/> </Route>
          <Route path="/login"> <LoginPage/> </Route>
          <Route path="/register"><RegisterPage/> </Route>
          <Route path="/admin/upload"> <UploadPage/> </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;


// 9.6 리액트 라우터 셋팅  
// 1. 설치 :npm install react-router-dom 
// 2. 가져오기 : import { Route, Switch } from 'react-router-dom';

// 페이지 4개 생성 : 랜딩페이지, 디테일페이지, 맵페이지, 게시판
