import React from 'react'
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import IndividualList from './IndividualList';


export default function TutorialList() {
   
const topic = [
        {
          name:"What is Personality",
          link:"vLqTf2b6GZw",
        },
        {
          name:"What is Personality",
          link:"vLqTf2b6GZw",
        },
        {
          name:"What is Personality",
          link:"",
        },
   ];

  return (
    <>
    <center><h2>Tips and Tricks for Personality Development</h2></center>
      <ListGroup>
        {topic.map((value,index) =>{
           return(
            <>
                <Container>
                  <ListGroup.Item> 
                    <IndividualList value = {value} index = {index} />
                  </ListGroup.Item>
                </Container>
            </>
           )
        })}
        </ListGroup>
      </>
  )
}
