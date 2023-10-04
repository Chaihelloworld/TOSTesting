'use client';
import React, { useState, useEffect, useContext } from 'react';
import { Container, Content, Button } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';
import ShareLogo from '../../public/shareLogo.png';
import 'rsuite/dist/rsuite.min.css';
import Form from './form';
import { UsersContext } from '../../contexts/usersContext';
import TableUsers from './tableUsers';

const App: React.FC = () => {
    const { setChairNumber, chair, users, setTogle, togleIndex, setTogleIndex } =
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
                                        กรุณาเลือก โซนที่นั่งก่อนลงทะเบียน
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
                                                            setChairNumber(data.id);
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
                                        {chair.langth == 0 && (
                                            <h1 style={{ color: 'rgb(165, 0, 0)' }}>
                                                ไม่มีที่ว่าง
                                            </h1>
                                        )}
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
                            <Col md={24} xs={24}>
                                <div
                                    style={{
                                        padding: '0px',
                                        marginTop: '5px',
                                        borderRadius: '5px',
                                        overflowX: 'auto'
                                    }}>
                                    <TableUsers />
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
