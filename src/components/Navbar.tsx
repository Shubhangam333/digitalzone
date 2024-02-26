import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="p-2 flex justify-between items-center">
      <hgroup>
        <h1 className="font-bold text-3xl">
          Digital <span className="text-primary">Zone</span>
        </h1>
      </hgroup>

      <nav>
        <ul className="flex justify-between items-center w-[15rem] text-lg">
          <li className="hover:text-primary transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-primary transition-all duration-300">
            <Link href="/">Shop</Link>
          </li>
          <li className="hover:text-primary transition-all duration-300">
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
      {/* <div className="flex w-[15rem] max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Enter keyword"
          className="focus-visible:ring-0 border-[1px] border-b-primary outline-none"
        />
        <Button variant="outline" size="icon" type="submit">
          <Search className="h-4 w-4 text-primary" />
        </Button>
      </div> */}
      <div className="flex gap-2 items-center">
        <Button variant="outline" size="icon">
          <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="relative">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-primary p-2 text-xs text-white">
                  3
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="file: mt-2 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </Button>
        <Button variant="outline" className="text-lg">
          Login
        </Button>
      </div>
    </header>
  );
}
