import Link from 'next/link';
import NavLink from './navLink';
import Bg from '@/components/ui/bg';

export default function Dashboard_Header() {

    return (
        <>
            <nav className="border-gray-200 bg-black fixed w-full top-0 border-b">
                <div className="container flex flex-wrap items-center justify-between mx-auto px-2 py-4 md:p-4 md:px-12">
                    <Link href={`/dashboard`} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logos/opf-wbg.png" className="h-8" alt="OpenPathFinder Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OpenPathFinder</span>
                    </Link>
                    <NavLink />
                </div>
            </nav>
        </>
    );
}