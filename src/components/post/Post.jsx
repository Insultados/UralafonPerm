import React from 'react';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Post.css'
import ModalImage from "react-modal-image";


const Post = ({ post_num, post_img, post, setShow, show }) => {

    post = post.filter((n) => { return n !== '' });
    post = post.filter((n) => { return n !== ' ' });

    const small_post_img = post_img;
    const large_post_img = post_img;

    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size='lg'
            >
                <Modal.Header closeButton>
                    <Container>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Новость №{post_num + 1}
                        </Modal.Title>
                    </Container>
                </Modal.Header>
                <Modal.Body size='lg'>
                    <Container>
                        {post.map((e, index) => (
                            <p key={index} >{e}</p>
                        ))}
                        {post_img == null
                            ? <></>

                            : <ModalImage
                                showRotate={true}
                                className={'modal-img'}
                                small={small_post_img}
                                large={large_post_img}
                                alt="Изображение"
                                style={{ cursor: 'zoom-in' }}
                            />
                        }

                    </Container>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Post;