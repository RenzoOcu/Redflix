import { z } from "zod";

export const formSchema=z.object({
    email:z.string().min(2,{
        message:"email is to shoot"

    }),
    password:z.string().min(2,{
        message:"email is to shoot"

    }),
    repeatPassword:z.string(),
  }).refine((data)=> data.password == data.repeatPassword,{
    message:"the passwords must maych",
    path:["repeatPassword"],

  })
  