import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-slate-800 flex justify-between items-center px-20 p-3 text-2xl font-semibold">
            <Link href="/">Home</Link>
            <ul>
                <li>
                    <Link href="/">Users</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;