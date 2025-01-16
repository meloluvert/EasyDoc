import axios from "axios";
const api = axios.create({
    baseURL: 'https://exp.host/--/api/v2/push',
    headers: { 'Content-Type': 'application/json', },
})
export interface ISendMessage {
    to?: string
    title?: string
    body?: string
}
interface IResponsePush {
    data: {
        status: string
        id: string
    }
}
class PushData {
    send(data: ISendMessage) {
        return api.post<IResponsePush>('/send', data)
    }
}
export default new PushData()