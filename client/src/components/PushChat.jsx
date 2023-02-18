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
      apiKey="QTTrzDhTFA.M39A2bR1H0mJOkaOiHKGwnR2HJ48BwEknyr74aO89dQNXyJL3FIoFmPQ7QcgIqtc"
      env="staging"
      // theme={theme}
    />
  );
};

export default PushChat;
