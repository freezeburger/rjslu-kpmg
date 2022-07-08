import axios from 'axios';
import { MessageModel } from './message.interface';

const ENDPOINT = process.env.REACT_APP_API_MESSAGES as string;

export const getMessages = ():Promise<MessageModel[]> => {
    
    console.time('HTTP_REQUEST_MESSAGE');

    return axios.get(ENDPOINT)
                .then( response => {

                    console.groupCollapsed('Http Response');
                    console.log(response);
                    console.timeEnd('HTTP_REQUEST_MESSAGE');
                    console.groupEnd();
                    
                    return response.data;
                })
                .catch(
                    err =>{
                        console.groupCollapsed('Http Runtime Error');
                        console.log(err);
                        console.timeEnd('HTTP_REQUEST_MESSAGE');
                        console.groupEnd(); 
                    }
                )
}