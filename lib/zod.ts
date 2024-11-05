import {  object,string } from "zod";

export const signInSchema =object({
    email:string({required_error:"email is requered"}).min(2,"email is required").email("Invalid email"),
    password:string({required_error:"password is required"}).min(1,"password is required"),
});
