import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const url = "https://uralafonperm.ru/api/"

    try {
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }, [])
    }
    catch {
        console.log("SERVER REQUEST ERROR")
    }

    if (error) {
        return (
            <div >

            </div>)
    } else if (!isLoaded) {
        return (
            <div >
            </div>)
    } else {

        let img_list = items['img']
        img_list = img_list.filter((n) => { return n !== null });
        return (
            <>
                <Container> <h3 style={{fontFamily: 'logo_font', fontSize: '45px'}}>Фотогалерея</h3> </Container>
                <Container>
                    <Carousel style={{ height: '300px', width: '400px' }}  className='carousel' activeIndex={index} onSelect={handleSelect}>
                        {img_list.map((e, index) => (
                            <Carousel.Item style={{ height: '300px', width:'400px' }} key={index}>
                                <img style={{ height: '300px', width:'400px' }} src={e} alt="" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </>
        );
    }

}

export default ControlledCarousel;