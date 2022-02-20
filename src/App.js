import React from 'react';
import './App.css';

import ProfileCard from './components/ProfileCard/ProfileCard';
import MatchList from './components/MatchList/MatchList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app-content'>
      <Header />
      <div className='main-content'>
        <MatchList />
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
