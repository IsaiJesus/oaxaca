import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="box-header">
      <h1>Adventurista</h1>
      <form>
        <input type="text" placeholder="Busca un interés" />
        <button>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
