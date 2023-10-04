'use client';
import React, { useContext } from 'react';
import { Panel } from 'rsuite';
import { Button, Container, Content, Grid, Row, Col } from 'rsuite';
import CenterBoard from './centerBoard';
import { UsersContext } from '../../contexts/usersContext';
import { useRouter } from 'next/router';

const App: React.FC = () => {
    const { chair, users } = useContext(UsersContext);
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
        setOpen(true);
    };
    const router = useRouter();
    const { eventName } = router.query;
    return (
        <Container>
            <Content style={{ padding: '2px', marginTop: '1rem', paddingBottom: '5rem' }}>
                <Grid>
                    <Row className="show-grid">
                        <Col md={24} xs={24}>
                            <Panel shaded style={{ backgroundColor: '#fff' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                    <div>
                                        <p style={{ fontSize: '30px', fontWeight: 600 }}>
                                            {eventName ? eventName : ''}
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 650 }}>
                                            จำนวนทัังที่นั่งทั้งหมด : {users.length}/{chair.length}
                                        </div>
                                        <br />
                                        {!open ? (
                                            <Button
                                                style={{ background: '#a50000' }}
                                                appearance="primary"
                                                onClick={handleOpen}>
                                                ลงทะเบียนเข้างาน
                                            </Button>
                                        ) : (
                                            <Button
                                                appearance="primary"
                                                style={{ background: '#a50000' }}
                                                onClick={() => {
                                                    router.push('/');
                                                }}>
                                                ย้อนกลับ
                                            </Button>
                                        )}
                                    </div>
                                </div>
                                {open && (
                                    <div
                                        className={`center-board ${
                                            open ? 'center-board-entered' : 'center-board-entering'
                                        }`}>
                                        <CenterBoard />
                                    </div>
                                )}{' '}
                            </Panel>
                            <br />
                        </Col>
                    </Row>
                </Grid>
            </Content>
            {/* <Modal
         
          size={"full"}
          backdrop={"static"}
          keyboard={false}
          open={open}
          onClose={handleClose}
        >
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>

          <Modal.Body >
            <div
              className={`center-board ${
                open ? "center-board-entered" : "center-board-entering"
              }`}
            >
              <CenterBoard />
            </div>
          </Modal.Body>
          <Modal.Footer>
     
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal> */}
        </Container>
    );
};

export default App;
