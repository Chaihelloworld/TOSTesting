'use client';
import React, { useEffect, useContext } from 'react';
import { Modal, Button, Container, Content, Grid, Row, Col } from 'rsuite';
import CenterBoard from './centerBoard';
import { UsersContext } from '../../contexts/usersContext';
import { Input, InputGroup } from 'rsuite';
import { Pagination } from 'rsuite';
import { IconButton } from 'rsuite';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import SearchIcon from '@rsuite/icons/Search';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;
const styles = {
    width: 300
};
const App: React.FC = () => {
    const { events } = useContext(UsersContext);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [dataSet, setDataSet] = React.useState();

    const handleChangeLimit = (dataKey: any) => {
        setPage(1);
        setLimit(dataKey);
    };
    const [sortData, setSortData] = React.useState('');

    useEffect(() => {
        if (sortData) {
            return;
        }
        const data = events.filter((v: any, i: any) => {
            const start = limit * (page - 1);
            const end = start + limit;
            return i >= start && i < end;
        });
        setDataSet(data);
    }, [events, limit, page, sortData]);

    const sortDataTable = () => {
        const filtered = events.filter((user: any) => {
            // Check if the user's data contains the search query (case-insensitive)
            const query = sortData.toLowerCase();
            const eventName = `${user.eventName}`.toLowerCase();
            return eventName.includes(query);
        });

        setDataSet(filtered);
    };
    return (
        <Container>
            <Content>
                <div style={{ float: 'right' }}>
                    <IconButton icon={<AddOutlineIcon />}>สร้าง Event</IconButton>
                </div>

                <br />
                <Grid style={{ marginTop: '3rem' }}>
                    <Row>
                        <div
                            style={{
                                backgroundColor: '#a50000',
                                padding: '15px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'align-items',
                                flexWrap: 'wrap',
                                flexDirection: 'row'
                            }}>
                            <p
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 800,
                                    color: 'white',
                                    marginTop: '5px'
                                }}>
                                รายการงาน อีเว้นท์
                            </p>
                            <div>
                                <InputGroup style={styles}>
                                    <Input
                                        onChange={(object, event) => {
                                            setSortData(event.target.value);
                                        }}
                                    />
                                    <InputGroup.Button
                                        onClick={(e) => {
                                            sortDataTable();
                                        }}>
                                        <SearchIcon />
                                    </InputGroup.Button>
                                </InputGroup>
                            </div>
                        </div>
                        <Col md={24} sm={24}>
                            <Table
                                height={200}
                                data={dataSet}
                                sortColumn={'eventName'}
                                defaultSortType={'desc'}>
                                <Column width={200} fixed>
                                    <HeaderCell>Event Name</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="eventName" />
                                </Column>

                                <Column width={200}>
                                    <HeaderCell>Description</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="description" />
                                </Column>

                                <Column width={200}>
                                    <HeaderCell>Limit Chair</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="limitChair" />
                                </Column>
                                <Column width={200}>
                                    <HeaderCell>Date</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="date" />
                                </Column>
                                {/* CustomTable() */}
                                <Column width={200} flexGrow={1}>
                                    <HeaderCell>Active</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="active">
                                        {(rowData) =>
                                            rowData.active ? (
                                                <p style={{ color: 'green' }}>Open</p>
                                            ) : (
                                                <p style={{ color: 'red' }}>Close</p>
                                            )
                                        }
                                    </Cell>
                                </Column>
                                <Column width={200} flexGrow={1}>
                                    <HeaderCell>Active</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="active">
                                        {(rowData) =>
                                            rowData.active ? (
                                                <div style={{ marginTop: '-8px' }}>
                                                    <Button onClick={handleOpen}>edit</Button>
                                                </div>
                                            ) : (
                                                <div style={{ marginTop: '-8px' }}>
                                                    <Button>edit</Button>
                                                </div>
                                            )
                                        }
                                    </Cell>
                                </Column>
                            </Table>
                            <div style={{ padding: 20 }}>
                                <Pagination
                                    prev
                                    next
                                    first
                                    last
                                    ellipsis
                                    boundaryLinks
                                    maxButtons={5}
                                    size="xs"
                                    layout={['total', '-', 'limit', '|', 'pager']}
                                    total={events.length}
                                    limitOptions={[5, 10, 15]}
                                    limit={limit}
                                    activePage={page}
                                    onChangePage={setPage}
                                    onChangeLimit={handleChangeLimit}
                                />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Content>
            <Modal
                size={'full'}
                backdrop={'static'}
                keyboard={false}
                open={open}
                onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div
                        className={`center-board ${
                            open ? 'center-board-entered' : 'center-board-entering'
                        }`}>
                        <CenterBoard />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default App;
