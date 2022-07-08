import { MessageModel } from "../services/message.interface";


export interface StateModel{
    user:null;
    online:boolean;

    messages:MessageModel[];
    outgoingMessage:null | Omit<MessageModel,'id'>;
}