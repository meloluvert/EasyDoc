import {api} from '../../api'

export interface IChat {
    title: string
    message: string
}

export interface IResponseChat{
    id: number
    user_id: number
    title: string 
    message: string 
    created_at: string
    user:{
        id:number
        name: string
        email: string
    }

}
export interface IMessage{
    title?: string
    message?: string
}
class MessageData{
    index(){
        return api.get<IResponseChat[]>('/message')
    }
    store(data: IMessage){
        return api.post('/message', data)

}
}

export default new MessageData()