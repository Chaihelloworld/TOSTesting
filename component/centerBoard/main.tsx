// MainNavbar.tsx
'use client';
// App.tsx
import React, { useState, useEffect, useContext } from 'react';

import { Panel } from 'rsuite';
import {  Button, Container, Content, Grid, Row, Col } from 'rsuite';
import { UsersContext } from '../../contexts/usersContext';
import { useRouter } from 'next/router';

const App: React.FC = () => {
    const router = useRouter();
    const { events } =
        useContext(UsersContext);
    return (
        <Container>
            <Content style={{ padding: '2px', marginTop: '5rem', paddingBottom: '5rem' }}>
                <Grid>
                    <Row
                        className="show-grid"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                        {events.map((data, index) => {
                            return (
                                <Col>
                                    <Panel
                                        shaded
                                        bordered
                                        bodyFill
                                        style={{ display: 'inline-block', width: 240 }}>
                                        <img src={data.image} height="285" width="250" />
                                        <Panel>
                                            <div style={{ textAlign: 'center' }}>
                                                <h5>{data.eventName}</h5>
                                                <br />
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}>
                                                <Button
                                                    color="red"
                                                    disabled={!data.active}
                                                    appearance="primary"
                                                    // startIcon={<GooglePlusCircleIcon />}
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: '/register',
                                                            query: { eventName: data.eventName }
                                                        });
                                                    }}>
                                                    ลงทะเบียนเข้างาน
                                                </Button>
                                            </div>
                                        </Panel>
                                    </Panel>
                                </Col>
                            );
                        })}
                    </Row>
                </Grid>
            </Content>
        </Container>
    );
};

export default App;
