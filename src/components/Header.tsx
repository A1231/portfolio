import Navbar from "./Navbar"

import Socials from "./Socials";
function Header() {
  return (
    <div className="flex justify-center items-center w-full border-b border-border py-3 gap-4 sm:gap-8 md:gap-16 lg:gap-32 flex-wrap">
    <Navbar />
    <Socials />
  </div>
);
}

export default Header;