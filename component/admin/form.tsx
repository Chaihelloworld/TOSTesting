import React, { useState, useContext, useEffect } from 'react';
import { Form, ButtonToolbar, Button, InputGroup, InputNumber } from 'rsuite';
import { UsersContext } from '../../contexts/usersContext';
import { useRouter } from 'next/router';


const App: React.FC = () => {
    const {
        deleteChair,
        addChair,
        chair,
        setTogle,
        setTogleIndex
    } = useContext(UsersContext);

    const router = useRouter();
    const [active, setActive] = useState(0);
    const [chairId, setChairId] = useState(0);

    const addNewChair = (e: any) => {
        e.preventDefault();
        router.push('/');
        setTogleIndex(-1);
        setActive(0);
        setTogle(false);
    };

    const [value, setValue] = React.useState(chair.length);

    const clearForm = () => {
        setActive(0);
        window.location.reload();
        setTogleIndex(-1);
        setTogle(false);
        // router.push('/manageChair')
    };
    useEffect(() => {
        if (!localStorage.getItem('chair_id')) {
            return;
        }
        setChairId(Number(localStorage.getItem('chair_id')));
    }, [chairId, localStorage.getItem('chair_id')]);
    // console.log(togle);

    const handleMinus = () => {
        setValue(parseInt(value, 10) - 1);
        let Index = parseInt(value, 10) - 1;
        deleteChair(chair[Index].id);
    };
    const handlePlus = (e) => {
        setValue(parseInt(value, 10) + 1);
        const newChair = {
            id: Date.now(),
            active: false
        };
        addChair(newChair);
    };
    return (
        <div>
            <Form fluid>
                <Form.Group controlId="name-5"></Form.Group>

                <Form.Group controlId="name-5">
                    <Form.ControlLabel style={{ fontWeight: 650, color: '#fff' }}>
                        จำนวนที่นั่ง
                    </Form.ControlLabel>

                    <InputGroup>
                        <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
                        <InputNumber
                            className={'custom-input-number'}
                            value={value}
                            onChange={setValue}
                        />
                        <InputGroup.Button
                            onClick={(e) => {
                                handlePlus(e);
                            }}>
                            +
                        </InputGroup.Button>
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <ButtonToolbar style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            appearance="primary"
                            onClick={(e) => {
                                addNewChair(e);
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
