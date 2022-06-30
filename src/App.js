import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer, HomeContainer, ServiceContainer, ContactContainer, ProposContainer, MenuContainer } from './components';

const App = () => {
  return (
    <div className=" w-screen h-auto flex flex-col">
      <Header />
      < HomeContainer />
      < MenuContainer />
      < ServiceContainer />
      < ProposContainer />
      < ContactContainer />
      <main className='mt-24 p-8 w-full'>
        
      </main>
      <Footer />
    </div>
  )
}

export default App