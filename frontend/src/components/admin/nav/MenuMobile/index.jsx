

export function MenuBar() {
    return (
        // <div className="drawer lg:drawer-open">
        //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content flex flex-col items-center justify-center">
        //         <label htmlFor="my-drawer-2" className='drawer-button max-2xl:hidden '>
        //             <IoMenu size={30} />
        //         </label>
        //     </div>
        //     <div className="drawer-side ">
        //         <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        //         <ul className="menu bg-base-200 text-base-content min-h-full w-70 py-4">
        //             <div className="flex items-center gap-2 border-b border-gray-200 px-3 pb-2">
        //                 <p className="text-xl text-gradient font-semibold">BiblioTech</p>
        //             </div>
        //             <div className="p-3 flex items-center gap-2 border-b border-gray-200">
        //                 <p className="bg-blue-300 w-7 h-7 text-center text-lg rounded-full font-bold text-white">A</p>
        //                 <div className="flex flex-col">
        //                     <p className="font-semibold text-base">Amanda Alves</p>
        //                     <p className="text-xs">Administrador</p>
        //                 </div>
        //             </div>
        //             <li><a>Sidebar Item 1</a></li>
        //             <li><a>Sidebar Item 2</a></li>
        //         </ul>
        //     </div>
        // </div>

        <ul className="menu menu-horizontal bg-base-200 rounded-box lg:hidden flex justify-center mx-auto ">
            <li>
                <a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </a>
            </li>
            <li>
                <a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </li>
            <li>
                <a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </a>
            </li>
        </ul>

    )

}