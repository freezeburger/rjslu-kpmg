export type MessagePriority = 'HIGH' | 'VERY_HIGH' | 'EXTREMELY_HIGH' ;

export interface MessageModel {
    id:number;
    title:string;
    content:string;
    date:number;
    
    priority?:MessagePriority;
}