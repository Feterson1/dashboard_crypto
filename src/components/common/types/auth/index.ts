import { FieldValues, UseFormRegister, FieldErrors} from "react-hook-form/dist/types"


export interface iPropsLogin <
TFieldValues extends FieldValues = FieldValues,
TContext = any,
>{

  

    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;


}
export interface iPropsRegister{

    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    setEmail: (value: string) => void
    setUserName: (value: string) => void
    setFirstName: (value: string) => void
    navigate: (to: string) => void
}

export interface iAuthState {
    user: iPublicUser,
    isLogged: boolean,
}

interface iPublicUser{
    id: number | null,

    firstName: string,

    userName: string,
    
    email: string,

    createdAt: string,

    updatedAt: string,

    watchlist: [iWatchList],
}

interface iWatchList{
    id: number | null,

    name: string,

    assetId: string,

    createdAt: string,

    updatedAt: string,

    user: number | null,


}