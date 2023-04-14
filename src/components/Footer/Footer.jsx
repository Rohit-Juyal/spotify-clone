import { Phonelink, PlayCircle, PlaylistPlay, QueueMusic, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material';
import './footer.css';
import { Slider } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img className='footer__albumLogo' src="https://i.ytimg.com/vi/d7TQEFJRE7I/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Ab4HgALQBYoCDAgAEAEYRCBlKFcwDw==&rs=AOn4CLAhVAFaTDf2EQ5a_dnWNwsXPPKVfQ" alt="" />

        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className='footer__green' />
        <SkipPrevious className='footer__icon' />
        <PlayCircle sx={{fontSize: 40}} className='footer__icon'/>
        <SkipNext className='footer__icon'/>
        <Repeat className='footer__green'/>
      </div>

      <div className="footer__right">
        <PlaylistPlay />
        <QueueMusic />
        <Phonelink />
        <VolumeDown />
        <Slider className='footer__slider' />
      </div>
    </div>
  )
}

export default Footer