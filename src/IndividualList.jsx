import React from 'react'
import { Col, Table ,Row , Container} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function IndividualList({ value , index}) {
  return (
   <>
      <Table>
        <Row>
            <Col className='col-8'>
               {index +1 }. <span>{value.name}</span>
            </Col>
            <Col className='col-4'>
            <Link
              to={"/video?id=" + value.link} >
                 <Button>Click Here</Button>
               </Link>
            </Col>
        </Row>
      </Table>
   </>
  )
}
