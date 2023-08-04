import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";

const Navbar = () => {
  return (
    <div className="p-6 flex justify-between items-center">
      <h1 className="text-3xl md:text-4xl font-bold ml-4">
        <Link href="/">dot2do</Link>
      </h1>
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
