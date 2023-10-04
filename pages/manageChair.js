import 'rsuite/dist/rsuite.min.css';
import AdminPage from '../component/admin/manage';
import { Container, Content } from 'rsuite';

export default function Home() {
    return (
        <>
            <br />
            <Container >
                <Content style={{padding:25}}>
                    <AdminPage />
                </Content>
            </Container>
        </>
    );
}
