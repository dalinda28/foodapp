import React from 'react';
import { Header, Footer, HomeContainer, ServiceContainer, ContactContainer, ProposContainer, MenuContainer } from './components';
import Loader from './Loader.js'
const App = () => {
  return (
    <div className=" w-screen h-auto flex flex-col">
      
      <Header />
      < HomeContainer />
      < MenuContainer />
      < ServiceContainer />
      < ProposContainer />
      < ContactContainer />
      <Loader />
      <main className='mt-24 p-8 w-full'>
        
      </main>
      <Footer />
    </div>
  )
}

export default App