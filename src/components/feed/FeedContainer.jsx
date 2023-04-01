import React from "react";
import FeedPost from "./FeedPost";
import classes from './FeedContainer.module.css'
import { useState, useEffect } from "react";
import { Row } from 'react-bootstrap'



const renderFeedContainerContent = (response) => {

    if (response !== null) {
        return (
            <Row className="mx-auto">
                {response['posts'].map((e, index) => (
                    <FeedPost key={index} post={e} post_img={response['img'][index]} post_num={response['posts'].indexOf(e)} />
                ))}
            </Row>)
    }
}

const FeedContainer = () => {

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
            <div className={classes.feed_container}>
                <div className={classes.feed_container_header}>
                    <p>ПОСЛЕДНИЕ НОВОСТИ</p>
                </div>
                <div>ERROR: {error.message}</div>
            </div>)
    } else if (!isLoaded) {
        return (
            <div className={classes.feed_container}>
                <div className={classes.feed_container_header}>
                    <p>ПОСЛЕДНИЕ НОВОСТИ</p>
                </div>
                <div>LOADING...</div>
            </div>)
    } else {
        return (
            <div className={classes.feed_container}>
                <div className={classes.feed_container_header}>
                    <p>ПОСЛЕДНИЕ НОВОСТИ</p>
                </div>
                {renderFeedContainerContent(items)}
            </div>
        );
    }

}

export default FeedContainer;