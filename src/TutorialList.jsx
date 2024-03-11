import React from 'react'
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import IndividualList from './IndividualList';
import style from './CSS/tutorial.module.css'


export default function TutorialList() {
   
const topic = [
        {
          name:"What is Personality",
          link:"dcsc_EsJmsA"
        },
        {
          name:"What is Personality Development",
          link:"7FkNpvBCOV4",
        },
        {
          name:"Needs to develop Personality",
          link:"LjhovsSPRF0",
        },
        {
          name:"Qualities for Personality Development",
          link:"c46Rw6pXnZA",
        },
        {
          name:"Personality Development Tips",
          link:"LnkHdqlN6dA",
        }
   ];

  return (
    <>
    <center><h2 className={`mt-4 mb-4 ${style.h} `}>Tips and Tricks for Personality Development</h2></center>
      <ListGroup >
        {topic.map((value,index) =>{
           return(
            <>
                <Container className={`${style.tr}`}>
                  <ListGroup.Item > 
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
