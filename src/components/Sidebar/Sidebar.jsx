import { HomeOutlined, LibraryMusic, Search } from '@mui/icons-material';
import SidebarOption from '../SidebarOption/SidebarOption';
import './sidebar.css';
import { useDataLayerValue } from '../../DataLayer';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img className='sidebar__img' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
      <SidebarOption title="Home" Icon={HomeOutlined} />
      <SidebarOption title="Search" Icon={Search} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />

      <div className="playlist">
        <hr />
        <h4>Playlists</h4>
        <div className="playlist__name">
          {playlists?.items?.map(playlist => (
            <SidebarOption title={playlist.name} />
          ))}
          <SidebarOption title="playlist" />
          <SidebarOption title="playlist" />
          <SidebarOption title="playlist" />
          <SidebarOption title="playlist" />
          <SidebarOption title="playlist" />
          <SidebarOption title="playlist" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
          <SidebarOption title="Your Library" />
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar