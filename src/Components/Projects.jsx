import React, { useEffect } from 'react'
import AOS from 'aos'
import {Box, Flex, Heading,Grid, GridItem, Text, Button , IconButton} from '@chakra-ui/react';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineEye} from 'react-icons/ai';
import VanillaTilt from 'vanilla-tilt';

function Projects() {
 
  return (
    <Box className='projects-container' id='/projects'>
        <Heading as={'h1'} data-aos="zoom-in">
            MY <span>PROJECTS</span>
        </Heading>

        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)','repeat(2, 1fr)']} gap={6} className='grid-container'  >


         
        <div data-aos="zoom-in">
            <Box>
            <img src={require("../utils/WeatherApp.png")} alt="spotify"  />
            <Box className='project-info'>
            <Heading as={'h4'}>Weather <span>App</span> </Heading> <br />
            <Text  m={'auto'} fontSize='2xl' ><b> WeatherApp is a digital Webapp that gives you Information about any contry weather conditions.</b></Text>
              <br/>
            <Text  m={'auto'} fontSize='l'><b>Individual Project :</b></Text>   
            <Text> <b>Duration :</b> 02 Days</Text>
           
            </Box>


            </Box>
            {/* buttons */}

            <Box >
            <Flex className="social-media" justify={'space-around'} alignItems={'center'} m={'-20px 0 -15px 0'} >
                    
                    <IconButton
                        variant="outline"
                        colorScheme="white"
                        aria-label="Send email"
                        borderRadius={'2px'}
          
                        icon={<BsGithub />}
                        
                        onClick={() => {
                          window.open("https://github.com/Abhay2201-Av/react-weather-app", "_blank");
                        }}
                      />
                        <Heading as={'h4'}>Weather <span>App</span> </Heading>
                      <IconButton
                        variant="outline"
                        colorScheme="white"
                        aria-label="Send email"
                        icon={<AiOutlineEye />}
                        onClick={() => {
                          window.open("https://react-weather-app-20.vercel.app/", "_blank");
                        }}
                      />
              </Flex>
                
                <Box >
                  <Box  textAlign={'left'} >
                  {/* <Text><b>Features:  </b>  Login/Logout, Oauth, SignUp, Search, Filter, Play, and Pause functionality has been implemented.</Text> */}
                  <Text><b>Techstack: </b> React JS | Openweather Api</Text>
                  </Box>

                  <Box  textAlign={'left'}>
                  <Text><b>Features:</b> <br/>
               
                    <li>Built a fully responsive Home page and Search page which closely resemble the user interface of WeatherApp.</li>
                    <li>Added search functionality.With the help of openweather api find any city weather conditions</li>
                    <li>Information about Temprature, Humidity, Wind Speed</li>
                    </Text>
                  </Box>
                  </Box>  
            </Box>

            
        </div>




{/* ! ***************************************************** */}

        <div data-aos="zoom-in">
        
        <Box>
        <img src={require("../utils/AbhayPortfolio.png")} alt="spotify"  />
        <Box className='project-info'>
        <Heading as={'h4'}>Port<span>folio</span> </Heading> <br />
        <Text  m={'auto'} fontSize={'30px'} ><b> This is my fully responsive portfolio which I recently made using React & Chakra UI.</b></Text> <br />

        <Text  m={'auto'} fontSize='l'><b>Individual Project</b> </Text>   
            <Text> <b>Duration :</b> 07 Days</Text>       
        
        </Box>


        </Box>
    

        <Box>
        <Flex className="social-media" justify={'space-around'} alignItems={'center'} m={'-20px 0 -15px 0'} >
              
        <IconButton
            variant="outline"
            colorScheme="white"
            aria-label="Send email"
            icon={<BsGithub />}
            onClick={() => {
              window.open("https://github.com/Rutu-11/My_Portfolio", "_blank");
            }}
          />

          <Heading as={'h4'}>Portfolio <span>Website</span> </Heading>

          <IconButton
            variant="outline"
            colorScheme="white"
            aria-label="Send email"
            icon={<AiOutlineEye />}
            onClick={() => {
              window.open("https://rutu-11.github.io/My_Portfolio/", "_blank");
            }}
          />
          
              </Flex>
            
            <Box >
              <Box  textAlign={'left'} >

              <Text><b>Techstack: </b> React JS | Redux</Text>
              </Box>

              <Box  textAlign={'left'}>
              <Text><b>Features:</b> <br/>
           
                <li>It is Fully Responsive</li>
                <li>Added Scrolling functionality </li>
                <li> added Animations on page load.</li>
                <li>Used <i> email formspree </i> for contact page</li> <br />
               
                
                </Text>
              </Box>
              
            </Box>  
           
        </Box>

        
    </div>


          
        </Grid>
    </Box>
  )
}

export default Projects