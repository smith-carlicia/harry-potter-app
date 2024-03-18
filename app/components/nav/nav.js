import Link from 'next/link';


const Nav = () => {

    return (
        <nav className='bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 list-none flex flex-row justify-content-start font-[europa] pt-5 pb-5 pl-3 sticky top-0'>
            <div className="bg-transparent list-none flex flex-row justify-content-start font-[europa] space-x-4">
                <ul>
                    <li>
                        <Link href="/" className='font-medium tracking-wide text-xl no-underline ml-1 scroll={false}'>Home</Link>

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