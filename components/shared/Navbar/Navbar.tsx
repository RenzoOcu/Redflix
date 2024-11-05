import { NavbarProps } from "./Navbar.types";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";





export  function Navbar(props:NavbarProps) {
  const {user}=props;
  
  return (
    <nav >
        <div className="hidden mx-auto md:block">
            <NavbarDesktop users={user} />
        </div>
        <div className="md:hidden">
            <NavbarMobile users={user}/>
        </div>
    </nav>
  );
  
}
