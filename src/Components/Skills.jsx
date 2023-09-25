import React, { useEffect } from "react";
import { Box, Flex, Heading , Text} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Skills() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 1000,
    });
    AOS.refreshHard();
  },[])
  return (
    <Box className="skills-container" id="/skills" >
    <Heading as={'h1'} data-aos="zoom-in">MY <span> TECHNICAL</span> SKILLS </Heading>
    <Flex className="skills-div">
      
    <Flex data-aos="zoom-in">
      
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
          />
            <Text>HTML</Text>
        </Flex>


        <Flex data-aos="zoom-in">
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
            />
            <Text >CSS</Text>
        </Flex>

        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
            <Text>JavaScript</Text>
        </Flex>

        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
          />
       
            <Text>React JS</Text>
        </Flex>
      
         
        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
          />
            <Text>Redux</Text>
        </Flex>

        <Flex data-aos="zoom-in">
        <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
            alt="git hub"
          />
            <Text>Git Hub</Text>
        </Flex>

          
        <Flex data-aos="zoom-in">
        <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
          />
            <Text>Git</Text>
        </Flex>
          
       
    </Flex>

      <Flex className="my-record">
          <Box data-aos="zoom-in">
            <Heading as={'h2'}>1,200+ <Text>Hours of Coding</Text> </Heading>
          </Box>
          
          <Box data-aos="zoom-in">
          <Heading as={'h2'}>3+ <Text>Projects</Text> </Heading>
          </Box>
      </Flex>

    </Box>
  );
}

export default Skills;
