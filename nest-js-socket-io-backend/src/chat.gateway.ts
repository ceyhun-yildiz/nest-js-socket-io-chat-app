import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway(/* 80, { namespace: 'chat' } */)
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string /* or client, data parameters */): void {
    this.server.emit('message', message);
  }
}
