import React from "react";
import {
  Flex,
  Heading,
  Button,
  Box,
  Text,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsDownload } from "react-icons/bs";
import { AiFillPhone, AiOutlineEye } from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import resume from "../utils/Abhay_Resume.pdf";

function Home() {
  const text = useTypewriter({
    words: ["Front-End Web Developer"],
    loop: {},
  });

  return (
    <Flex
      id="/home"
      className="home"
      
      justifyContent={[
        "center",
        "center",
        "center",
        "space-between",
        "space-between",
      ]}
    >
      <Box
       
        className="home-content"
      
        textAlign={["center", "center", "center", "left", "left"]}
        
      >
        <Heading as="h3" className="heading">
          Hello, My name is
        </Heading>
        <Heading as="h1" className="heading">
          Abhay Chauhan
        </Heading>
        <Heading as="h3" className="heading job-role">
          I am a<span>{text[0]}</span>
          <Cursor />
        </Heading>
        <Text>
        A highly skilled and enthusiastic Front-End Web Developer proficient in cutting-edge technologies such as Html, Css, Java Script, React JS, Redux, Angular JS. 
        </Text>

        <Box className="social-media">
          <IconButton
            variant="outline"
            colorScheme="orange"
            aria-label="Send email"
            icon={<GrLinkedin />}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/abhay-sinh-chauhan-b24086206/",
                "_blank"
              );
            }}
          />
          <IconButton
            variant="outline"
            colorScheme="orange"
            aria-label="Send email"
            icon={<BsGithub />}
            onClick={() => {
              window.open("https://github.com/Abhay2201-Av", "_blank");
            }}
          />
          
          <a href="mailto:abhaysinh2201@gmail.com"  >
            <IconButton
              variant="outline"
              colorScheme="orange"
              aria-label="Send email"
              icon={<SiGmail />}
            />
          </a>
        </Box>

        <a href={resume} target="_blank" >
          <Button
            colorScheme="#fb641b"
            rightIcon={<AiOutlineEye color="white" className="icon" />}
            variant="solid"
            className="downloadBtn"
          >
            Resume
          </Button>
        </a>

        <a href={resume} download="Abhay_Resume">
          <IconButton
            className="downloadBtn"
            colorScheme="#fb641b"
            aria-label="Send email"
            icon={<BsDownload className="icon" />}
          />
        </a>
      </Box>

      <Box
        w={["250px", "350px", "450px", "420px", "470px"]}
        h={["250px", "350px", "450px", "420px", "470px"]}
        
        margin={"auto"}
      >
        <Flex
          w="85%"
          h={"85%"}
          className="home-image"
          
        >
          <Image
           
            src={require("../utils/ab5.png")}
            alt=""
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Home;
