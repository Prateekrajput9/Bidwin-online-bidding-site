import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authSlice";
import {
  MdOutlineCreate,
  MdOutlineDashboard,
  MdMailOutline,
  MdAttachMoney,
  MdMenuOpen,
  MdOutlineAccountCircle,
  MdOutlineHome,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import {
  IoCloseSharp,
  IoDocumentTextOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { RiAuctionLine } from "react-icons/ri";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  // User logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //this will prevent body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <RiAuctionLine className="h-7 w-7 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                BidMaster
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {(user ? protectedNavLink.slice(0, 4) : navMenu).map((item) => (
                <NavLink
                  to={item.link}
                  key={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 hover:text-blue-700 font-semibold px-3 py-2 rounded-md bg-blue-50"
                      : "text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-all duration-200"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            {!user && (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-5 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md"
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <MdMenuOpen className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200 bg-gray-900">
          <div className="flex items-center space-x-3">
            <RiAuctionLine className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold text-white">
              BidMaster
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-200 hover:text-white focus:outline-none p-2 rounded-md hover:bg-gray-800"
            aria-label="Close menu"
          >
            <IoCloseSharp className="h-6 w-6" />
          </button>
        </div>

        {user && (
          <div className="p-5 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-md">
                {user.user.avatar ? (
                  <img
                    src={user.user.avatar}
                    alt={user.user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <MdOutlineAccountCircle className="h-8 w-8 text-white" />
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{user.user.name}</p>
                <p className="text-sm text-gray-600 truncate">
                  {user.user.email}
                </p>
              </div>
            </div>
          </div>
        )}

        <nav className="p-5">
          <ul className="space-y-2">
            {(user ? protectedNavLink.slice(0, 4) : navMenu).map((item) => (
              <li key={item.link}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center py-3 px-4 text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold rounded-lg transition-all duration-200"
                      : "flex items-center py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium rounded-lg transition-all duration-200"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {user ? (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <ul className="space-y-2">
                {protectedNavLink.slice(4, 7).map((item) => (
                  <li key={item.link}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center py-3 px-4 text-blue-600 bg-blue-50 hover:bg-blue-100 font-semibold rounded-lg transition-all duration-200"
                          : "flex items-center py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium rounded-lg transition-all duration-200"
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <button
                    className="flex items-center w-full py-3 px-4 text-red-600 hover:text-red-700 hover:bg-red-50 font-medium rounded-lg transition-all duration-200"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleLogout();
                    }}
                  >
                    <IoLogOutOutline className="mr-3 h-5 w-5" />
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <Link
                to="/login"
                className="block w-full py-3 px-4 text-center text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block w-full py-3 px-4 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export const LoginSignup = () => {
  return (
    <>
      <Link
        to="/login"
        className="px-5 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium hidden md:block"
      >
        Log in
      </Link>
      <Link
        to="/signup"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-md hidden md:block"
      >
        Sign up
      </Link>
    </>
  );
};

const navMenu = [
  {
    name: "Home",
    link: "/",
    icon: <MdOutlineHome className="mr-3 h-5 w-5" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <MdOutlineAccountCircle className="mr-3 h-5 w-5" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <MdMailOutline className="mr-3 h-5 w-5" />,
  },
  {
    name: "Legal",
    link: "/legal",
    icon: <IoDocumentTextOutline className="mr-3 h-5 w-5" />,
  },
];

const protectedNavLink = [
  {
    name: "Dashboard",
    link: "/",
    icon: <MdOutlineDashboard className="mr-3 h-5 w-5" />,
  },
  {
    name: "Create Auction",
    link: "/create",
    icon: <MdOutlineCreate className="mr-3 h-5 w-5" />,
  },
  {
    name: "View Auction",
    link: "/auction",
    icon: <RiAuctionLine className="mr-3 h-5 w-5" />,
  },
  {
    name: "My Auction",
    link: "/myauction",
    icon: <MdAttachMoney className="mr-3 h-5 w-5" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <MdMailOutline className="mr-3 h-5 w-5" />,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <MdOutlineAccountCircle className="mr-3 h-5 w-5" />,
  },
  {
    name: "Privacy",
    link: "/privacy",
    icon: <MdOutlinePrivacyTip className="mr-3 h-5 w-5" />,
  },
];
