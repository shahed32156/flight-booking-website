import React from 'react'


import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#000',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#000',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hello, welcome to our website. What is your name?',
    trigger: '2'
  },


  {
    id: '2',
    user:true,
    trigger: '3'
  },

  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you. How can we help you?',
    trigger: '4'
  },

  {
    id: '4',
    user: true,
    trigger: '5'
  },

  {
    id: '5',
    message: "Thank you, our team will contact with you very soon.",
    end : true
  },


    

 
  
];



const Chatbot = () => {
  return (
    <>
  

<ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} 
      headerTitle="Travel Agency Chatbot"
      recognitionEnable={true}
      speechSynthesis={{ enable: true, lang: 'en' }}
      
      />
      
    </ThemeProvider>

    
    </>
  )
}

export default Chatbot
