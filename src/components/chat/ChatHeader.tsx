import React from 'react';
import './ChatHeader.scss';

import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import PanoramaIcon from '@mui/icons-material/Panorama';
import HelpIcon from '@mui/icons-material/Help';

type Props = {
  channelName: string | null;
};

const chatHeader = (props: Props) => {
  const { channelName } = props;
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeaderRight">
        <MarkUnreadChatAltIcon />
        <NotificationsOffIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chatHeaderSearch">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <PanoramaIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default chatHeader;
