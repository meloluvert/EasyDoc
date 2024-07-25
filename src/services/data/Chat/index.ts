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

}
class MessageData{
    index(){
        return api.get<IResponseChat[]>('/message')
    }

}

export default new MessageData()