import React from 'react';
import { Media, Grid, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PhoneCard extends React.PureComponent {
  static propTypes = {
    phone: PropTypes.object,
    onOrder: PropTypes.func.isRequired
  };

  handleOrder = () => {
    this.props.onOrder(this.props.phone);
  };

  render() {
    const { phone } = this.props;
    return (
      <div>
        <Media>
          <Media.Left>
            <img width={64} height={64} src={phone.imageUrl}/>
          </Media.Left>
          <Media.Body>
            <Grid>
              <Row>
                <Col xs={12} md={12}><b>{phone.name}</b></Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  Issue date: {phone.date}
                </Col>
                <Col xs={6} md={6}>
                  Price: ${phone.price}
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  Color: {phone.color}
                </Col>
                <Col xs={6} md={6}>
                  In stock: {phone.amount > 0 ? 'yes' : 'no'}
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}></Col>
                <Col xs={6} md={6}>
                  <Button
                    onClick={this.handleOrder}
                    disabled={phone.amount === 0}>Order</Button>
                </Col>
              </Row>
            </Grid>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default PhoneCard;
