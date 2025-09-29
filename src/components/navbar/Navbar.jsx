import { useState } from "react";
import Link from "./link/Link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navLinks.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="flex justify-between items-center py-4">
      <span className="flex gap-3">
        <span
          className="md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <X></X> : <Menu></Menu>}
        </span>
        <ul className={`md:hidden absolute ${open?'top-15':'-top-50'} duration-1000 bg-amber-200 space-y-1`}>
            {/* {open?links:""} */}
            {links}
            </ul>
        <h3 className="font-bold">Pricing</h3>
      </span>
      <ul className="md:flex items-center gap-4 hidden ">{links}</ul>
      {/* <ul className="flex items-center gap-4">
        {navLinks.map((route) => (
          <li key={route.id}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul className="flex items-center gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
      <button className="btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
