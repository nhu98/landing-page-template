'use client';
import { EventHandlerPayload, LiveChatWidget } from '@livechat/widget-react';

const LiveChat = () => {
  const handleNewEvent=(event: EventHandlerPayload<'onNewEvent'>)=> {
    console.log('LiveChatWidget.onNewEvent', event);
  }

  return (
    <LiveChatWidget
      license="18457389"
      visibility="maximized"
      onNewEvent={handleNewEvent}
    />
  );
};

export default LiveChat
