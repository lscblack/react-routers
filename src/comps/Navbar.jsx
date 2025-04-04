export function Navbar(){
    return(
        <div className="flex gap-5 bg-slate-800 p-2">
            <a className="text-white hover:border-b-red-500 border-b-2 border-b-slate-800" href="/" >Home</a>
            <a className="text-white hover:border-b-red-500 border-b-2 border-b-slate-800" href="/about">About</a>
            <a className="text-white hover:border-b-red-500 border-b-2 border-b-slate-800" href="/contact">Contact</a>
            <a className="text-white hover:border-b-red-500 border-b-2 border-b-slate-800" href="/feedback">feedback</a>
        </div>
    )
}