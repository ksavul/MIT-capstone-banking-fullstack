import * as React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import useUserContext from "../hooks/useUserContext";


function NavLink({ children, href, title, hoveredItem, setHoveredItem }) {
  // const [hoveredItem, setHoveredItem] = React.useState(null);
  const router = useRouter()

  return (
    <li
    className={`nav-item`}
  >
    <Link
      href={href}
      className={`nav-link rounded ${router.asPath === `/${href}` ?
      "active bg-secondary text-white" :
      hoveredItem === href ? "bg-lightGray" : ""}`}
      title={title}
      onMouseEnter={() => setHoveredItem(href)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {title}
    </Link>
  </li>
  )
}

const navigation = [
  {title: 'Create Account', href: 'CreateAccount', AuthorizeRoles: ['admin', 'customer', 'guest']},
  {title: 'Login', href: 'Login', AuthorizeRoles: ['admin', 'customer', 'guest']},
  {title: 'Deposit', href: 'Deposit', AuthorizeRoles: ['admin', 'customer']},
  {title: 'Withdraw', href: 'Withdraw', AuthorizeRoles: ['admin', 'customer']},
  {title: 'Bank Accounts', href: 'BankAccounts', AuthorizeRoles: ['admin', 'customer']},
  {title: 'All Data', href: 'AllData', AuthorizeRoles: ['admin', 'customer']},
]

function NavBar() {
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const {currentUser, setCurrentUser} = useUserContext();

  function getDescription(item) {
    switch (item) {
      case "CreateAccount":
        return "Create a new account";
      case "Login":
        return "Log in to your account";
      case "Deposit":
        return "Make a deposit";
      case "Withdraw":
        return "Withdraw funds";
      case "BankAccounts":
        return "Handle savings accounts";
      case "AllData":
        return "View all data";
      default:
        return "";
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light p-3 bg-light">
        <Link
          href={"/"}
          className="navbar-brand"
        >
          Bad Bank
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {navigation?.map((item, index) => (
              <div key={index}>
              {(item?.AuthorizeRoles.includes('guest') || currentUser) && <NavLink href={item.href} title={item.title} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem}/>}
              </div>
            ))}
          </ul>
        </div>
        {currentUser?.name && <div className="username">{currentUser?.name || ''}</div>}
      </nav>

      {hoveredItem && (
        <div className="description-popup">
          {getDescription(hoveredItem)}
        </div>
      )}
    </>
  );
}

export default NavBar;
