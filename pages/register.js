import 'rsuite/dist/rsuite.min.css';
import Board from '../component/centerBoard/index';
import Footer from '../component/footer/footer'
export default function Home() {
    return (
        <div className="bodyStyle">
            <div style={{ bottom: '2rem'}}>
                <Board />
            </div>
            <Footer/>
        </div>
    );
}
