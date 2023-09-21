import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaMapMarkerAlt,
  FaRoute,
  FaHeadset,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="box-navbar">
      <NavLink
        to=""
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <FaUser />
      </NavLink>
      <NavLink
        to=""
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <FaMapMarkerAlt />
      </NavLink>
      <NavLink
        to=""
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <FaRoute />
      </NavLink>
      <NavLink
        to=""
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <FaHeadset />
      </NavLink>
      <NavLink
        to=""
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <FaSignOutAlt />
      </NavLink>
    </nav>
  );
}
