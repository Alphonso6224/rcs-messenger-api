import { Body, Controller, Post, Req } from "@nestjs/common";
import { SendMessageDto } from "./dto/send-message.dto";
import { MessagesService } from "./messages.service";

@Controller('messages')
export class MessagesController {
    constructor (private readonly messagesService: MessagesService) {}

    @Post()
    async sendMessage(@Body() body: SendMessageDto, @Req() req: Request) {
        // On pourrait aussi récupérer la clé API ici si besoin
        return this.messagesService.sendMessage(body);
    }
}