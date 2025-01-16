import { api } from "../../api"

{/* para logar */ }
export interface IUser {
    email?: string
    name?: string
    password?: string
}

export interface IResponseUser {
    name: string
    email: string
    created_at: string
    updated_at: string
    id: number
}

{/* para quando está auenticado, precisamos do token */ }
export interface IAuthenticated {
    user: IUser
    token: {
        token: string
        expires_at: string
    }
}


export interface IUserToken {
    id: number
    name: string
    email: string
    token: string
}
class UserData {
    register(data: IUser) {
        return api.post<IResponseUser>('/register', data)
    }
    login(data: IUser) {
        return api.post<IAuthenticated>('/login', data)
    }
    updateToken(token: string) {
        return api.put('/user', { token })
    }
    index() {
        return api.get<IUserToken[]>('/user')
    }
}
export default new UserData()