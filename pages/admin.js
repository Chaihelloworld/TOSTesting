import Navbar from '../component/navbar/navbar';
import 'rsuite/dist/rsuite.min.css';
import AdminPage from '../component/admin/';
import { Container, Content } from 'rsuite';

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <div >
                <Container>
                    <Content>
                        <AdminPage />
                    </Content>
                </Container>
            </div>
        </>
    );
}
