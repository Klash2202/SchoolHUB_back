import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { log } from "console";


@WebSocketGateway(
    {
        cors: {
            origin: '*'
        }
    }
)

export class SocketService implements OnGatewayConnection{


    @SubscribeMessage('server-path')
    handleEvent(@MessageBody() dto: any, @ConnectedSocket() client: any) {
        console.log('dto: ', dto);
        const res = {type: 'semeType', dto};
        client.emit("client-path", res);
    }

    handleConnection(client: any) {
        console.log(client);
        console.log('CONNECTED');
    }

}