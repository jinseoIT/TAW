import './App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DetailPage from './components/DetailPage';
import MapPage from './components/MapPage';
import BulletinPage from './components/BulletinPage'
import UploadPage from './components/admin/uploadPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/"> <LandingPage /> </Route>
          <Route path="/detail"> <DetailPage /> </Route>
          <Route path="/map"> <MapPage/> </Route>
          <Route path="/bulletin"> <BulletinPage /> </Route>
          <Route path="/admin/upload"> <UploadPage/> </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;


// 9.6 리액트 라우터 셋팅  
// 1. 설치 :npm install react-router-dom 
// 2. 가져오기 : import { Route, Switch } from 'react-router-dom';

// 페이지 4개 생성 : 랜딩페이지, 디테일페이지, 맵페이지, 게시판
