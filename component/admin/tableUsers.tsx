import React, { useContext, useEffect } from 'react';
import { Form, ButtonToolbar } from 'rsuite';
import { UsersContext } from '../../contexts/usersContext';
import 'rsuite/dist/rsuite.min.css';
import { Table, Pagination } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import {  Container, Content, Grid, Row, Col } from 'rsuite';

const styles = {
    width: 300
};
const { Column, HeaderCell, Cell } = Table;

const App: React.FC = () => {
    const { users } = useContext(UsersContext);
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
        const data = users.filter((v: any, i: any) => {
            const start = limit * (page - 1);
            const end = start + limit;
            return i >= start && i < end;
        });
        setDataSet(data);
    }, [users, limit, page, sortData]);


    const sortDataTable = () => {
        const filtered = users.filter((user: any) => {
            const query = sortData.toLowerCase();
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(query);
        });

        setDataSet(filtered);
    };
    return (
        <Container>
            <Content>
                <br />
                <Grid style={{ marginTop: '4rem' }}>
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
                                รายชื่อผู้เข้างาน
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
                                sortColumn={'firstName'}
                                defaultSortType={'desc'}>
                                <Column width={200}>
                                    <HeaderCell>First Name</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="firstName" />
                                </Column>

                                <Column width={200}>
                                    <HeaderCell>Last Name</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="lastName" />
                                </Column>

                                <Column width={200}>
                                    <HeaderCell>Phone Number</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="phoneNumber" />
                                </Column>
                                <Column width={200}>
                                    <HeaderCell>Date</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="date" />
                                </Column>
                                <Column width={200} flexGrow={1}>
                                    <HeaderCell>NO Chair</HeaderCell>
                                    <Cell style={{ textAlign: 'center' }} dataKey="chairId" />
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
                                    total={users.length}
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
        </Container>
    );
};

export default App;
