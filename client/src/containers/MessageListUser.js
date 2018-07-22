import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItemUser from "../components/MessageItemUser";

class MessageListUser extends Component {
  componentDidMount() {
    this.props.fetchMessages();
    
  }
  componentDidUpdate(){
    this.props.fetchMessages();
  }


  render() {

    const { messages, removeMessage, currentUser } = this.props;
    let messageList = messages.map(m => (
        
      <MessageItemUser
        key={m._id}
        date={m.createAt}
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={currentUser === m.user._id}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
        <h2 className="panel-title">
        I tuoi messaggi
        </h2>
        <br/>
          <ul className="list-group" id="messages">
          {messageList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage })(
  MessageListUser
);
