import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hook';
import useCollection from '../../hooks/useCollection';

import { addDoc, collection } from 'firebase/firestore';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection('channels');

  const addChannel = async () => {
    // ボタンを押すと入力モーダルが出てくる
    let channelName: string | null = prompt('新しいチャンネルを作成します');

    if (channelName) {
      await addDoc(collection(db, 'channels'), {
        // モーダルに入力した値をfirestoreに保存する
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      {/* sidebarLeft (アイコンを並べる)*/}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./doraemon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./icon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./pancake.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight (チャンネルを並べる)*/}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>Japanese Manga</h4>
            </div>
            <AddIcon className="sidebarAddIcon" onClick={() => addChannel()} />
          </div>
          <div className="sidebarChannelLists">
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
          </div>
        </div>

        {/* sidebarFooter */}
        <div className="sidebarFooter">
          <div className="sidebarAccount">
            <img src={user?.photo} alt="" onClick={() => auth.signOut()} />{' '}
            {/*アイコンを押したらログアウトする*/}
            <div className="accountName">
              <h4>{user?.displayName}</h4>
              <span>#{user?.uid.substring(0, 4)}</span>{' '}
              {/*uidは長いのでsubstring関数を使って4文字だけにする*/}
            </div>
          </div>
          <div className="sidebarVoice">
            <KeyboardVoiceIcon />
            <HeadphonesIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
