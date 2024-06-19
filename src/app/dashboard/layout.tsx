import Dashboard_Header from "@/components/dashboard/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Dashboard_Header />
            {children}
        </>
    );
}