import { IoHome } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

export const Navigation = () => {
    return (
        <nav className="w-full flex justify-around p-4 bg-white rounded-t-[2em]">
            <button className="flex justify-center items-center flex-col text-violet-500 gap-[2px] w-16">
                <IoHome className="text-xl w-6 h-6" />
                <span className="text-xs">Home</span>
            </button>

            <button className="flex justify-center items-center flex-col text-gray-500 gap-[2px] w-16">
                <IoCalendarOutline className="text-xl w-6 h-6" />
                <span className="text-xs">Agenda</span>
            </button>

            <button className="flex justify-center items-center flex-col text-gray-500 gap-[2px] w-16">
                <IoIosHeartEmpty className="text-xl w-6 h-6" />
                <span className="text-xs">Favoritos</span>
            </button>

            <button className="flex justify-center items-center flex-col text-gray-500 gap-[2px] w-16">
                <IoPersonOutline className="text-xl w-6 h-6" />
                <span className="text-xs">Perfil</span>
            </button>
        </nav>
    )
}