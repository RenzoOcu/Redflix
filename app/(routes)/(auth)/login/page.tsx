import Link from 'next/link';

import { Checkbox } from "@/components/ui/checkbox"
import { Terms } from '../components/Terms';
import { LoginForm } from './LoginForm';
import { auth } from '@/auth';


export default  async function Loginpage() {
    const session = await auth();

    return (
        <div>
            <p className='text-3xl font-bold text-left mb-7' >Iniciar sesion</p>
            
            
            
            <LoginForm/>
            
            <div className='mt-5 text-center'>
                <Link href='/' className='hover:underline hover:opacity-70'>
                    ¿has olvidado tu contraseña  ?
                </Link>

            </div>
             
             <div className='flex items-center space-x-2 mt-4'>
                <Checkbox id='terms'className='border-white'/>
                <label className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Recuerdame 
                </label>

            </div>
            <div  className='mt-4  flex gap-1'>
                <p className='text-white opacity-70'>¿no tienes cuenta ?</p>
                <Link href="/register"  className='opacity-1 text-white'>
                inicia sesion ya
                </Link>

            </div>
            <Terms/>


        </div>
    )
}