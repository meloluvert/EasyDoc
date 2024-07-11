import {api} from "../../api"

{/* para logar */}
export interface IUser{
    email?: string
    name?: string
    password?: string
}

export interface IResponseUser{
    name: string
    email: string
    created_at: string
    updated_at: string
    id: number
}

{/* para quando está auenticado, precisamos do token */}
export interface IAuthenticated{
    user: IUser
    token:{
        token:string
        expires_at: string
    }
}



class UserData{
    register(data: IUser){
        return api.post<IResponseUser>('/register', data)
    }
    login(data: IUser){
        return api.post<IAuthenticated>('/login', data)
    }
}
export default new UserData()