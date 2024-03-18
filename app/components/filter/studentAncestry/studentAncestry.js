const StudentAncestry = () => {

    return (
        <div class="mx-auto flex items-center justify-center py-10">
            <div class="group relative cursor-pointer py-2">

                <div class="flex items-center justify-between space-x-5 bg-transparent outline outline-white rounded-small px-4">
                    <a class="menu-hover my-2 py-2 text-base font-xl font-[europa] text-white tracking-widest lg:mx-4" onClick="">
                        Ancestry
                    </a>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>

                <div
                    class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        Muggle Born
                    </a>

                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        Half-Blood
                    </a>

                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        Pure-Blood
                    </a>
                </div>
            </div>
        </div>
    )
}

export default StudentAncestry;