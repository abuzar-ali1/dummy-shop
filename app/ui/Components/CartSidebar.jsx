"use client";
import { motion } from "framer-motion";
import "../../globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SparklesIcon,
  StarIcon,
  ShoppingBagIcon,
  TruckIcon,
  ShieldCheckIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useAuth } from "@/app/context/AuthContext";
import { useComingSoon } from "../hooks/useComingSoon";
import CartSidebar from "./CartSidebar";

const products = [
  {
    name: "New Arrivals",
    description: "Fresh styles updated weekly with fast delivery",
    href: "/products?filter=new",
    icon: SparklesIcon,
    color: "from-cyan-500 to-blue-500",
    badge: "Just Launched",
  },
  {
    name: "Best Sellers",
    description: "Top picks loved by thousands of customers",
    href: "/products?filter=bestsellers",
    icon: StarIcon,
    color: "from-amber-500 to-orange-500",
    badge: "Popular",
  },
  {
    name: "Sustainable Collection",
    description: "Eco-friendly products for conscious living",
    href: "/products?filter=sustainable",
    icon: ShieldCheckIcon,
    color: "from-green-500 to-emerald-500",
    badge: "Eco",
  },
  {
    name: "Accessories",
    description: "Complete your look with our premium accessories",
    href: "/products?filter=accessories",
    icon: ShoppingBagIcon,
    color: "from-purple-500 to-pink-500",
    badge: "Style",
  },
  {
    name: "Fast Shipping",
    description: "Free 2-day delivery on orders over $50",
    href: "/shipping",
    icon: TruckIcon,
    color: "from-blue-500 to-cyan-500",
    badge: "Free",
  },
];

const callsToAction = [
  { name: "Shop All Products", href: "/products", icon: ShoppingBagIcon },
  { name: "Contact Support", href: "/contact", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const { handleComingSoon } = useComingSoon();
  const { currentUser, logout } = useAuth();

  // Sample cart count - replace with your actual cart state
  useEffect(() => {
    setCartItemsCount(2); // This would come from your cart context
  }, []);

  const handleLogout = () => {
    logout();
  };

  const getUserInitial = () => {
    if (!currentUser?.firstName) return "U";
    return currentUser.firstName.charAt(0).toUpperCase();
  };

  return (
    <header className="bg-gray-900 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Mobile Icons - Left Side */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* User Icon */}
          {currentUser ? (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer"
            >
              {getUserInitial()}
            </motion.div>
          ) : (
            <motion.a
              href="/login"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserIcon className="size-6" />
            </motion.a>
          )}

          {/* Cart Icon */}
          <motion.button
            onClick={() => setIsCartOpen(true)}
            className="text-gray-400 hover:text-white transition-colors duration-200 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                {cartItemsCount}
              </span>
            )}
          </motion.button>
        </div>

        {/* Logo - Center on mobile, left on desktop */}
        <div className="flex lg:flex-1 justify-center lg:justify-start">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DummyShop</span>
            <motion.div
              className="font-us text-white text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              DummyShop
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/products"
            className="text-sm/6 font-semibold text-white hover:text-cyan-300 transition-colors duration-200"
          >
            Products
          </Link>
          <a
            onClick={handleComingSoon}
            href="#"
            className="text-sm/6 font-semibold text-white hover:text-cyan-300 transition-colors duration-200"
          >
            Marketplace
          </a>
          <Link
            href="/company"
            className="text-sm/6 font-semibold text-white hover:text-cyan-300 transition-colors duration-200"
          >
            Company
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:text-cyan-300 transition-colors duration-200 outline-none">
              Features
              <ChevronDownIcon
                aria-hidden="true"
                className="size-4 flex-none text-gray-400 group-hover:text-cyan-300 transition-colors duration-200"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-5 w-screen max-w-lg -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-2xl bg-gray-800 shadow-xl ring-1 ring-cyan-500/20"
              >
                <div className="relative grid gap-6 bg-gray-800 p-6 lg:grid-cols-2">
                  {products.map((item) => (
                    <motion.a
                      key={item.name}
                      href="#"
                      onClick={handleComingSoon}
                      className="group -m-3 flex items-start rounded-lg p-3 hover:bg-gray-700/50 transition-all duration-200 border border-transparent hover:border-cyan-500/20"
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r ${item.color} shadow-lg`}
                      >
                        <item.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium text-white">
                            {item.name}
                          </p>
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white shadow-sm`}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 border-t border-gray-700">
                  <div className="flex justify-between space-x-4">
                    {callsToAction.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="flex items-center text-sm font-medium text-white hover:text-cyan-300 transition-colors duration-200 group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon
                          className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-cyan-300 mr-2 transition-colors duration-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>

        {/* Desktop Icons - Right Side */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4 lg:items-center">
          {/* User Profile or Login Icon */}
          {currentUser ? (
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 outline-none">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer"
                >
                  {getUserInitial()}
                </motion.div>
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute right-0 z-10 mt-3 w-64 origin-top-right rounded-2xl bg-gray-800 shadow-xl ring-1 ring-cyan-500/20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4"
                >
                  {/* User Info */}
                  <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {getUserInitial()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {currentUser.firstName} {currentUser.lastName}
                      </p>
                      <p className="text-sm text-gray-300 truncate">
                        {currentUser.email}
                      </p>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-2">
                    <a
                      href="/profile"
                      className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
                    >
                      <UserIcon className="w-4 h-4 mr-3" />
                      My Profile
                    </a>
                    <a
                      href="/orders"
                      className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors duration-200"
                    >
                      <ShoppingBagIcon className="w-4 h-4 mr-3" />
                      My Orders
                    </a>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-3 py-2 text-sm text-red-300 hover:text-red-100 hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                    >
                      <ArrowRightOnRectangleIcon className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              </PopoverPanel>
            </Popover>
          ) : (
            <motion.a
              href="/login"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <UserIcon className="size-6" />
            </motion.a>
          )}

          {/* Cart Icon */}
          <motion.button
            onClick={() => setIsCartOpen(true)}
            className="text-gray-400 hover:text-white transition-colors duration-200 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                {cartItemsCount}
              </span>
            )}
          </motion.button>

          {/* Wishlist Icon */}
          <motion.button
            onClick={handleComingSoon}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu Button - Right Side */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">DummyShop</span>
              <div className="text-white text-xl font-bold">DummyShop</div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-gray-800 transition-colors duration-200">
                    Features
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180 transition-transform duration-200"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <a // ← Change DisclosureButton to regular <a> tag
                        key={item.name}
                        href="#"
                        onClick={handleComingSoon}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-3 border border-transparent hover:border-cyan-500/20"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                        >
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span>{item.name}</span>
                            <span
                              className={`text-xs px-1.5 py-0.5 rounded bg-gradient-to-r ${item.color} text-white`}
                            >
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-gray-300 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </a> // ← Close with </a> instead of </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  Products
                </a>
                <a
                  onClick={handleComingSoon}
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  Marketplace
                </a>
                <a
                  href="/company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  Company
                </a>
              </div>
              <div className="py-6 flex space-x-4">
                {currentUser ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {getUserInitial()}
                    </div>
                    <div className="text-white text-sm">
                      <p>Hello, {currentUser.firstName}</p>
                      <button
                        onClick={handleLogout}
                        className="text-red-300 hover:text-red-100 text-xs"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <UserIcon className="w-6 h-6" />
                  </a>
                )}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 relative"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={handleComingSoon}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
