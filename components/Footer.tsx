import Link from "next/link";
import { Github } from "lucide-react";
interface FooterProps {}

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto py-10 w-fit">
        <Link
          href="https://github.com/4d757365"
          className="w-full flex gap-3 items-center justify-center"
        >
          <Github size={20} />
          <span className="font-medium">&copy; 2023 4d757365.</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
