export class SendMessageDto {
    to: string; // numéro ou identifiant du destinataire
    text?: string;
    imageUrl?: string;
    fileUrl?: string;
    templateId?: string;
    mode?: 'test' | 'real'; // optionnel, sinon récupéré depuis process.env
}