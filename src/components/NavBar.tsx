import "../styles/components/NavBar.sass";

import { AiOutlineRight } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

type NavBarProps = {
  active: number;
};

const NavBar = ({ active }: NavBarProps) => {
  return (
    <header>
      <nav>
        <section>
          {active === 2 || active == 3 ? (
            <BsFillCheckCircleFill size={28} className="icon" />
          ) : (
            <div
              className={active === 1 ? "active_number" : "container_number"}
            >
              <p>1</p>
            </div>
          )}
          <p
            className={
              active === 1 || active === 2 || active === 3 ? "active_title" : ""
            }
          >
            Contato
          </p>
        </section>
        <AiOutlineRight size={24} className="arrow_right" />
        <section>
          {active === 3 ? (
            <BsFillCheckCircleFill size={28} className="icon" />
          ) : (
            <div
              className={active === 2 ? "active_number" : "container_number"}
            >
              <p>2</p>
            </div>
          )}
          <p className={active === 2 || active === 3 ? "active_title" : ""}>Empresa</p>
        </section>
        <AiOutlineRight size={24} className="arrow_right" />
        <section>
          <div className={active === 3 ? "active_number" : "container_number"}>
            <p>3</p>
          </div>
          <p className={active === 3 ? "active_title" : ""}>Projeto</p>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
