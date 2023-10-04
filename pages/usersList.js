import 'rsuite/dist/rsuite.min.css';
import AdminPage from '../component/admin';
import { Container, Content } from 'rsuite';

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Container >
                <Content >
                    <AdminPage />
                </Content>
            </Container>
        </>
    );
}
