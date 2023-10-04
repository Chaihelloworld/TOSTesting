'use client';
import React from 'react';
import { Container, Content, Grid, Row, Col } from 'rsuite';
import TableUsers from './tableUsers';
const App: React.FC = () => {
    return (
        <Container>
            <Content style={{ padding: '2px', marginTop: '1rem', display: 'flex' }} >
                <Grid >
                    <Row className="show-grid" >
                        <Col md={24} xs={24}>
                          <div >
                          <TableUsers />
                          </div>
                        </Col>
                    </Row>
                </Grid>
            </Content>
        </Container>
    );
};

export default App;
