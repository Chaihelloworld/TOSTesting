'use client';
import React, { useState, useEffect, useContext } from 'react';
import { Container, Content, Button } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';
import ShareLogo from '../../public/shareLogo.png';
import 'rsuite/dist/rsuite.min.css';
import { UsersContext } from '../../contexts/usersContext';
import Swal from 'sweetalert2';
import Form from './form';


const App: React.FC = () => {

    const { updateChair, chair, users, setTogle, togleIndex, setTogleIndex } =
        useContext(UsersContext);

    const [newData, setNewData] = useState<{ id: number; active: boolean }[]>([]);

    useEffect(() => {
        const updatedJsonData = chair.map((item) => {
            const matchingUser = users.find((user: any) => user.chairId === item.id);

            if (matchingUser) {
                return {
                    ...item,
                    active: true
                };
            }

            return item;
        });
        setNewData(updatedJsonData);
    }, [users, chair]);

    const ActionBTN = (index: number, id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'ต้องการปิดที่นั่งนี้หรือไม่',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const editchair = chair.filter((chairs) => chairs.id === id)[0];
                const updateChairs = {
                    id: id,
                    active: true
                };
                updateChair(updateChairs.id, updateChairs);
                Swal.fire('ปิดที่นั่งสำเร็จ!', 'Your file has been deleted.', 'success');
            }
        });

        if (togleIndex === index) {
            setTogle(false);

            setTogleIndex(-1); // Reset the index if the same button is clicked again
        } else {
            setTogle(true);

            setTogleIndex(index);
        }
    };
    return (
        <div className="show-container">
            <Container>
                <Content style={{ padding: '20px' }}>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col md={18} xs={24}>
                                <div className="custom-button-container">
                                    <h5
                                        style={{
                                            fontWeight: 650,
                                            color: '#ff9b00',
                                            textAlign: 'center'
                                        }}>
                                        กำหนดจำนวนที่นั่ง ด้วยตนเอง
                                    </h5>
                                    <br />
                                    <div className="custom-button-style">
                                        {newData.map((data, index) => {
                                            return (
                                                <div key={index} style={{ padding: '5px' }}>
                                                    <Button
                                                        className="custom-button"
                                                        disabled={data.active ? true : false}
                                                        onClick={() => {
                                                            ActionBTN(index, data.id);
                                                        }}
                                                        style={
                                                            togleIndex === index
                                                                ? { backgroundColor: '#ff7f75' }
                                                                : {}
                                                        }>
                                                        <img
                                                            style={
                                                                data.active
                                                                    ? { filter: 'grayscale(100%)' }
                                                                    : togleIndex === index
                                                                    ? {}
                                                                    : {}
                                                            }
                                                            src={`${ShareLogo.src}`}
                                                            alt="Logo"
                                                        />{' '}
                                                    </Button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} xs={24}>
                                <div className="custom-button-container-insert">
                                    <div className="custom-button-style">
                                        <Form />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </div>
    );
};

export default App;
