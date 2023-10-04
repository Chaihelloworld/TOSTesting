import React, { useState, useContext, useEffect } from 'react';
import { Form, ButtonToolbar, Button } from 'rsuite';
import { UsersContext } from '../../contexts/usersContext';

const App: React.FC = () => {
    const { chairNumber, addUsers, togle, setTogle, setTogleIndex } = useContext(UsersContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [chairId, setChairId] = useState(0);

    function formatDate() {
        const date = new Date(Date.now());
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const addNewUsers = (e: any) => {
        e.preventDefault();
        if (!firstName && !lastName) return;
        const newUser = {
            id: Date.now(),
            firstName,
            lastName,
            phoneNumber,
            chairId,
            date: formatDate()
        };
        addUsers(newUser);
        setTogleIndex(-1);
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setChairId(0);
        setTogle(false);
    };
    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setTogleIndex(-1);
        setTogle(false);
    };

    useEffect(() => {
        setChairId(chairNumber);
    }, [chairId, chairNumber]);
    return (
        <div>
            <Form fluid>
                <Form.Group controlId="name-5">
                    <Form.ControlLabel style={{ fontWeight: 650, color: '#fff' }}>
                        ชื่อ
                    </Form.ControlLabel>
                    <Form.Control
                        disabled={togle ? false : true}
                        name="firstName"
                        value={firstName}
                        onChange={(object, event) => {
                            if (togle == false) {
                                setFirstName('');
                            } else {
                                setFirstName(object);
                            }
                        }}
                    />
                </Form.Group>

                <Form.Group controlId="name-5">
                    <Form.ControlLabel style={{ fontWeight: 650, color: '#fff' }}>
                        นามสกุล
                    </Form.ControlLabel>
                    <Form.Control
                        disabled={togle ? false : true}
                        name="lastName"
                        value={lastName}
                        onChange={(object, event) => {
                            if (togle == false) {
                                setLastName('');
                            } else {
                                setLastName(object);
                            }
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="name-5">
                    <Form.ControlLabel style={{ fontWeight: 650, color: '#fff' }}>
                        เบอร์โทรศัพท์
                    </Form.ControlLabel>
                    <Form.Control
                        disabled={togle ? false : true}
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(object, event) => {
                            if (togle == false) {
                                setPhoneNumber('');
                            } else {
                                setPhoneNumber(object);
                            }
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <ButtonToolbar style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            disabled={togle ? false : true}
                            appearance="primary"
                            onClick={(e) => {
                                addNewUsers(e);
                            }}>
                            ยืนยัน
                        </Button>
                        <Button
                            appearance="default"
                            onClick={(e) => {
                                clearForm();
                            }}>
                            ยกเลิก
                        </Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </div>
    );
};

export default App;
