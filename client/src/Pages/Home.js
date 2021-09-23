import Carousel from "react-bootstrap/Carousel";
import React from "react";
import Catalog from "../components/Catalog";

 export function Home () {
    return (
        <>
            <Carousel className='carousel'>
                <Carousel.Item interval={2000}>
                    <img
                        className="carousel-image d-block w-100 h-700"
                        src='https://i.ibb.co/0qxKcYV/carousel-1.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="carousel-image d-block w-100 h-700"
                        src="https://i.ibb.co/hXWgBB6/carousel-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image d-block w-100 h-700"
                        src="https://i.ibb.co/NsgsYMP/carousel-3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Catalog />
        </>
    )
}

