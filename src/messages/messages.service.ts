import { Injectable, Logger } from "@nestjs/common";
import { SendMessageDto } from "./dto/send-message.dto";

@Injectable()
export class MessagesService {
    private readonly logger = new Logger(MessagesService.name);

    async sendMessage(dto: SendMessageDto) {
        const mode = dto.mode || process.env.MODE || 'test';

        if (mode === 'test') {
            this.logger.log(`[TEST MODE ] Message simulé: ${JSON.stringify(dto)}`);
            return {
                status: 'success',
                mode: 'test',
                message: 'Message simulé',
                payload: dto
            };
        }

        // Ici on branchera Twilio plus tard
        this.logger.log(`[REAL MODE] Envoi réel à faire: ${JSON.stringify(dto)}`);
        return {
            status: 'success',
            mode: 'real',
            message: 'Envoi réel à implémenter',
            payload: dto
        };
    }
}