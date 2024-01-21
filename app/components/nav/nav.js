import Link from 'next/link';


const Nav = () => {

    return (
        <nav className='backdrop-opacity-10 backdrop-invert bg-white/30  list-none flex flex-row justify-content-start font-[europa] shadow-xl shadow-slate-950/50 z-[100] pt-3'>
            <div className="list-none flex flex-row justify-content-start font-[europa] shadow-xl shadow-slate-950/50 space-x-4">
                <ul>
                    <li>
                        <Link href="/" className='font-medium tracking-wide text-xl no-underline ml-1 scroll={false}'>Home</Link>

                    </li>
                </ul>
                <ul>
                    <li class="dropdown">
                        <Link href="/" className='font-medium tracking-wide text-xl no-underline ml-1 dropdown-toggle'>House</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/pages/students" className='font-medium tracking-wide text-xl no-underline ml-1'>Students</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/pages/staff" className='font-medium tracking-wide text-xl no-underline ml-1'>Staff</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/pages/spells" className='font-medium tracking-wide text-xl no-underline ml-1'>Spells</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;