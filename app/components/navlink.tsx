import { Link } from "@remix-run/react";

interface IProps {
  to: string;
  title: string;
}

export default function NavLink({ to, title }: IProps) {
  return (
    <Link
      to={to}
      className="px-2 py-1 rounded-[4px] transition duration-200 border border-sky-600 hover:border-sky-400 hover:underline"
    >
      {title}
    </Link>
  );
}
