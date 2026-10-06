import { ReactNode } from 'react'
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}
/**  The "children" prop is the current page being rendered */ 
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            {/* Navbar is present across every page */}
            <Navbar />
            <main className='mx-auto max-w-3xl px-6 pb-12 pt-24'>{children}</main>
        </>
    )
}