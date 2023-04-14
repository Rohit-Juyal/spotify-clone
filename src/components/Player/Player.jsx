import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './player.css';

const Player = ({ spotify }) => {
  return (
    <div className='player'>
        <div className="player__body">
            <Sidebar />
            <Body spotify={spotify} />
        </div>
        <Footer />
    </div>
  )
}

export default Player