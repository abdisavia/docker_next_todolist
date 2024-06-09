import Navbar from "../components/navbar"

export default function Layout({children}) {
    return (
        <main className="w-full h-screen bg-blue-950 overflow-y-auto">
            {/* <Navbar/> */}
            <section className="">
                {children}
            </section>
        </main>
    )
}