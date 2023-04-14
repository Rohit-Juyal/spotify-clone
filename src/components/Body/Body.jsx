import { Favorite, FavoriteBorder, MoreHoriz, PlayCircle } from '@mui/icons-material';
import { useDataLayerValue } from '../../DataLayer';
import Header from '../Header/Header';
import './body.css';
import { useState } from 'react';
import SongRow from '../SongRow/SongRow';

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const [fav, setFav] = useState(false)

  const favToggle = () => {
    setFav(!fav)
  }

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <h4>PLAYLIST</h4>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircle className='body__shuffle' sx={{ color: "#1ed15e"}} />
          <button onClick={favToggle}>
            {fav ? <Favorite sx={{ color: '#1ed15e'}} /> : <FavoriteBorder sx={{ color: 'gray' }}/>}
          </button>

          <MoreHoriz sx={{color: 'gray'}} />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body