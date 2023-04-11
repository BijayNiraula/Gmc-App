import React from 'react'
import Header from './Header'
import ActionSection from './ActionSection'
import WelcomeSection from './WelcomeSection'
function Home(props) {
  return (
  <div className='body  -dark container  '>
   
     <Header />

     <WelcomeSection name={props.name} pp={props.pp} email={props.email} />
    
     <ActionSection/>

       
  </div>
  )
}

export default Home