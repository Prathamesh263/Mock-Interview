import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
// import { redirect } from "next/navigation";
// import { isAuthenticated } from "@/lib/actions/auth.action"; // adjust path if needed

const Layout = async ({ children }: { children: ReactNode }) => {
    // const isUserAuthenticated = await isAuthenticated();
    //
    // // ✅ Redirect to sign-in if not authenticated
    // if (!isUserAuthenticated) redirect("/sign-in");

    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="PrepWise Logo" width={38} height={32} />
                    <h2 className="text-primary-100">PrepWise</h2>
                </Link>
            </nav>

            {children}
        </div>
    );
};

export default Layout;
