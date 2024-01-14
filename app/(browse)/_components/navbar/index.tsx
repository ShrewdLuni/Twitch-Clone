import { Logo } from "./logo"
import { Search } from "./search"
import { Actions } from "./actions"

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[50] bg-pink-900 px-1 lg:px-2 flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
      <Actions />
    </nav>
  )
}