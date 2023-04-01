import React, { useState } from "react";
import Post from "../post/Post";
import classes from './FeedPost.module.css'
import { Col, Button, Card } from 'react-bootstrap'


const FeedPost = ({ post_num, post, post_img }) => {

    const [modalPostActive, setModalPostActive] = useState(false);


    let feed_post = post.slice(0, 4);

    feed_post = feed_post.filter((n) => { return n !== ' ' });
    feed_post = feed_post.filter((n) => { return n !== '' });
    feed_post = feed_post.filter((n) => { return n !== '\n' });

    const loadCardTitle = (post_num) => {
        if (post[0] === '') {
            return (<p> Смотрите информацию в приклёпленном изображении </p>)
        }
        else {
            return (feed_post.map((e, index) => (
                <p className={classes.feed_element_content_tet} id={"feed_element_content_text" + post_num} key={index} >{e}</p>
            )))
        }
    }


    return (
        <Col style={{ paddingTop: '2rem', paddingBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: "center" }}
            id={'feed_element_container' + post_num}
            className={'feed_element_container'}>

            <Card style={{ width: '300px' }}>
                <Card.Img variant="top" src={post_img == null ? 'https://sun9-79.userapi.com/impg/4UoGxWmKzues1q1-ghJmae5qTcne_GCBGHfGAQ/yGBL_RZYuHc.jpg?size=1500x701&quality=96&sign=934516e0db229dd3951c4385ea555a6f&type=album' : post_img} style={{ height: '180px' }} />
                <Card.Body>
                    <Card.Title id={"card_title" + post_num} style={{ height: "141px", overflow: "hidden" }}>
                        {loadCardTitle(post_num)}
                    </Card.Title>
                    <Button onClick={() => setModalPostActive(true)} variant="primary">Читать дальше</Button>
                </Card.Body>

            </Card>
            <Post post_num={post_num}setShow={setModalPostActive} show={modalPostActive} post_img={post_img} post={post} />
        </Col>
    )
}

export default FeedPost;