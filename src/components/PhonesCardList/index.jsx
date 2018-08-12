import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PhoneShortCard from '../PhoneShortCard';

const PhonesCardList = ({ phones }) => (
  <ListGroup>
    {phones.map(item => (<ListGroupItem key={item.id}><PhoneShortCard phone={item}/></ListGroupItem>))}
  </ListGroup>
);

export default PhonesCardList;
