import React from "react";
import UserAside from "./UserAside";
import MessageListUser from "../containers/MessageListUser";

const MessageTimelineUser = props => {
  return (
    <div className="row">
      <UserAside
        profileImageUrl={props.profileImageUrl}
        username={props.username}
        userId={props.userId}
      />
      <MessageListUser />
    </div>
  );
};

export default MessageTimelineUser;