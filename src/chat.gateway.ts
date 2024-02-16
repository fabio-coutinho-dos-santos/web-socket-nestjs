import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class ChatGateway {

  @WebSocketServer()
  server;

  @SubscribeMessage('channel_1')
  handleMessage(@MessageBody() message: string): void {
    Logger.log(message);
    this.server.emit('common_channel', message)
  }

  @SubscribeMessage('channel_2')
  handleMessageChannel1(@MessageBody() message: string): void {
    Logger.log(message);
    this.server.emit('common_channel', message)
  }
}
