import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="Lolzinho" />
      <ChannelButton channelName="Phasmophobia" />
      <ChannelButton channelName="Magic" />
      <ChannelButton channelName="Csgo" />
      <ChannelButton channelName="Valorant" />

      <Category>
        <span>Canais de Voz</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat-livre" isVoice/>
      <ChannelButton channelName="Lolzinho" isVoice/>
      <ChannelButton channelName="Phasmophobia" isVoice/>
      <ChannelButton channelName="Magic" isVoice/>
      <ChannelButton channelName="Csgo" isVoice/>
      <ChannelButton channelName="Valorant" isVoice/>
    </Container>
  );
};

export default ChannelList;
