import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './NAVBAR/Nav';
import About from './ABOUT/About';
import Footer from './FOOTER/Footer';
import Contact from './CONTACT/Contact';
import Book from './BOOK/Book';
import FadeLoader from "react-spinners/FadeLoader";
import RevealOnScroll from './HOOK/RevealOnScroll';
import Carousel from './CAROUSEL/Carousel';
import Flight from './SEARCH_FLIGHT/Flight';
import Support from './SUPPORT/Support';
import Memories from './MEMORIES/Memories';
import Company from './COMPANY/Company';
import Travellers from './TRAVELLERS/Travellers';
import Subscribe from './SUBSCRIBE/Subscribe';
import Signin from './SIGNIN/Signin';
import Signup from './SIGNUP/Signup';
import Admin_signin from './ADMIN_SIGNIN/Admin_signin';
import Book1 from './BOOK1/Book1';
import Admin_panel from './ADMIN_PANEL/Admin_panel';
import Passenger from './PASSENGER_DETAILS/Passenger'
import Payment from './PAYMENT/Payment';
import Flights_table from './ALL_FLIGHTS/Flights_table';
import Flights_table_oneWay from './ALL_FLIGHTS/Flights_table_oneWay';
import Ticket from './TICKET/Ticket';
import Chatbot from './CHATBOT/Chatbot';

function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-[100vh]'>
          <FadeLoader color="pink" />
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Nav />
            <Chatbot />
            <Routes>
              <Route
                path="/about"
                element={
                  <>
                    <Carousel />
                    <RevealOnScroll>
                      <About />
                    </RevealOnScroll>
                    
                  </>
                }
              />
             
             <Route path='/signin' element={


               <>
               
               <Carousel />
                    <RevealOnScroll>
                      <Signin />
                    </RevealOnScroll>
               
               </>


             }
             
             />


             <Route path='/signup' element={


                <>
                
                <Carousel />
                    <RevealOnScroll>
                      <Signup />
                    </RevealOnScroll>
                
                
                </>  


             }
             
             />


              <Route path='/signin' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Signin />
                  </RevealOnScroll>


              </>  


              }

              />


              <Route path='/admin_signin' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Admin_signin />
                  </RevealOnScroll>


              </>  


              }

              />

             <Route 
             
             
             path='/contact' element={

         
              <>
              
                    <Carousel />
                    <RevealOnScroll>
                      <Contact />
                    </RevealOnScroll>
            
              
              </>

             }
             
             
             />
             

             <Route path='/book' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Book />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/round_trip' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Book />
                  </RevealOnScroll>


              </>  


              }

              />

              <Route path='/one_way' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Book1 />
                  </RevealOnScroll>


              </>  


              }

              />


              <Route path='/admin_panel' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Admin_panel />
                  </RevealOnScroll>


              </>  


              }

              />  


              <Route path='/passenger' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Passenger />
                  </RevealOnScroll>


              </>  


              }

              /> 

              <Route path='/payment' element={


              <>

              <Carousel />
                  <RevealOnScroll>
                    <Payment />
                  </RevealOnScroll>


              </>  


              }

              /> 


                <Route path='/flights_table' element={


                <>

                <Carousel />
                    <RevealOnScroll>
                      <Flights_table />
                    </RevealOnScroll>


                </>  


                }

                /> 

          <Route path='/flights_tableOneway' element={


          <>

          <Carousel />
              <RevealOnScroll>
                <Flights_table_oneWay />
              </RevealOnScroll>


          </>  


          }

          /> 

          <Route path='/ticket' element={

          <>

          <Carousel />
              <RevealOnScroll>
                <Ticket />
              </RevealOnScroll>


          </>  


          }

          /> 

              <Route
                path="/home"
                element={
                  <>
                    <Carousel />
                    <RevealOnScroll>
                      <Flight />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Support />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Memories />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Company />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Travellers />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Subscribe />
                    </RevealOnScroll>
                    
                  </>
                }
              />

                <Route
                path="/*"
                element={
                  <>
                    <Carousel />
                    <RevealOnScroll>
                      <Flight />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Support />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Memories />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Company />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Travellers />
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Subscribe />
                    </RevealOnScroll>
                    
                  </>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
