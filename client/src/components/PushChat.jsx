import React from 'react';
import { Chat } from '@pushprotocol/uiweb';

const PushChat = ({ player1, player2 }) => {
  // const p1 = player1.player1.playerAddress;
  // const p2 = player2.player2.playerAddress;

  console.log(player1[0]);

  return (
    <Chat
      account={player1[0]}
      supportAddress={player2[0]}
      greetingMsg="Welcome Opponent"
      modalTitle={`Chat With ${player1[1]}`}
      apiKey="tAWEnggQ9Z.UaDBNjrvlJZx3giBTIQDcT8bKQo1O1518uF1Tea7rPwfzXv2ouV5rX9ViwgJUrXm"
      env="staging"
      // theme={theme}
    />
  );
};

export default PushChat;
