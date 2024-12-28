import { IoSearch } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export const SearchHeader = () => {

    return (
        <div className="p-4 sticky z-10 top-0 bg-[#f7f7ff]">
            <div className="flex gap-2">
                <div className="relative flex flex-grow justify-center items-center">
                    <IoSearch className="absolute left-4 text-gray-400" />
                    <input type="text" className="w-full rounded-full h-10 pl-11 text-sm placeholder:text-gray-400 text-gray-800" placeholder="Buscar..." />
                </div>
                <button className="w-10  h-10 rounded-full bg-white flex justify-center items-center">
                    <HiAdjustmentsHorizontal className="scale-[1.15]" />
                </button>
            </div>
        </div>
    );

}