import Link from "next/link";
import { Terms } from "../components/Terms";
import { RegisterForm } from "./RegisterFomr";

export default function RegisterPage() {
  return (
    <div>
        <p className="text-3xl  font-bold  text-left mb-7">Registro de usuario</p>
        <RegisterForm/>
      

      <div className="mt-4  flex  gap-1">
      <p className="text-white opacity-70">¿ya tienes cuenta?</p>
      <Link href="/login" className="opacity-1  text-white">
      inicia sesion aqui
      </Link>
      </div>
      <Terms/>
    </div>
  
  );
}

