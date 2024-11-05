import{create}from'zustand'
import {persist,createJSONStorage} from 'zustand/middleware'
import { UserNetflix } from '@prisma/client'
interface  UserCurrentUser{
    currentUser:UserNetflix | null
    changeCurrentUser :(data: UserNetflix)=> void
}
export  const  UserCurrentNetflixUser = create(persist<UserCurrentUser>(
    (set)=>({
        currentUser:null,
        changeCurrentUser:(data:UserNetflix)=>{
            set({currentUser:data});

        },


    }),
    {
        name:"current-netflix-user",
        storage:createJSONStorage(()=> sessionStorage),
    }
))