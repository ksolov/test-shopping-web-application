import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PhoneCard from '../PhoneCard';

const PhonesList = ({ phones, onOrder }) => (
  <ListGroup>
    {phones.map(item => (<ListGroupItem key={item.id}><PhoneCard onOrder={onOrder} phone={item} /></ListGroupItem>))}
  </ListGroup>
);

export default PhonesList;
