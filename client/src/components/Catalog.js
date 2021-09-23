import React, {Component} from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {store} from "../index";

class Catalog extends Component {
    storeUnsubscribe;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        this.storeUnsubscribe = store.subscribe(() => {

            const state = store.getState();

           this.setState({
                isLoaded: !state.isLoading,
                items: state.products
            });
        });

        store.dispatch({type: 'GET_PRODUCTS'});
    }

    componentWillUnmount() {
        this.storeUnsubscribe();
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <p> Error {error.message} </p>
        } else if (!isLoaded) {
            return  <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        } else {
            return (
                <Row xs={1} md={2} lg={4} className="g-4">
                    {items.map((item) => (
                        <Col key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.imgSrc} />
                                <Card.Body>
                                    <Card.Header><strong>{item.title}</strong></Card.Header>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Link to={'/product/' + item.id} className="btn btn-primary">Подробнее</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )
        }
    }
}

export default Catalog;