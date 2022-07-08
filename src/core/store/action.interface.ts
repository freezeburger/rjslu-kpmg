export enum ActionTypes{
    
    NETWORK_NO_SIGNAL = 'NETWORK_NO_SIGNAL',
    NETWORK_RECOVERY = 'NETWORK_RECOVERY',

    MESSAGE_LIST_REQUEST = 'MESSAGE_LIST_REQUEST',
    MESSAGE_LIST_REQUEST_SUCCESS = 'MESSAGE_LIST_REQUEST_SUCCESS',
    MESSAGE_LIST_REQUEST_FAILURE = 'MESSAGE_LIST_REQUEST_FAILURE',

    MESSAGE_SEND_REQUEST = 'MESSAGE_SEND_REQUEST',
    MESSAGE_SEND_REQUEST_SUCCESS  = 'MESSAGE_SEND_REQUEST_SUCCESS',
    MESSAGE_SEND_REQUEST_FAILURE  = 'MESSAGE_SEND_REQUEST_FAILURE',

}

export interface ActionModel{
    type:ActionTypes;
    payload:any; 
}