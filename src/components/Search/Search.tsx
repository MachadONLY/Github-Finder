import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import classes from "./Search.module.css";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <>
      <div className={classes.search}>
        <h1>Busque por usuário </h1>
        <p>Conheça seus melhores repositórios</p>
        <div className={classes.search_container}>
          <input
            type="text"
            className={classes.input}
            placeholder="Digite o perfil que deseja encontrar"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => loadUser(userName)}>
            <BsSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
