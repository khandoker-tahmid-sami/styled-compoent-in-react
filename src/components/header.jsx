import React from 'react'
import { StyledHeader,Nav, Image } from './styles/header.styled'
import { Button } from './styles/button.styled'
import { Flex } from './styles/flex.styled'
const Header = () => {
    const handleClick = () =>{
        console.log("button clicked")
    }
  return (
    <div>
       <Nav>
            <h1>Khandoker Tahmid Sami</h1>
            <Button onClick={handleClick}>Explore Please</Button>
       </Nav>
        <StyledHeader>
            <Flex>
                    <div>
                        <h1>Create your Community</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Nulla dignissimos natus nam velit est labore facilis eligendi! 
                            Magni, quo, corporis autem facilis architecto quaerat voluptas 
                            praesentium dolores, aliquid culpa amet?
                        </p>
                        <Button bg="#134b5f" color="white">Community</Button>
                    </div>
                    <Image src="./images/powerfull.png" alt=""></Image>
       </Flex>
       </StyledHeader>
    </div>
  )
}

export default Header