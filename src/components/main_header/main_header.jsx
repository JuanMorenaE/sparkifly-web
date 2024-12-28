import { FiBell } from "react-icons/fi";

export const MainHeader = () => {

    return (
        <header className="pt-8 px-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-base text-gray-400 font-normal leading-4">Hola Juan,</p>
                    <h2 className="text-2xl font-bold text-gray-800">Buenos Días!</h2>
                </div>
                <button className="w-10  h-10 rounded-full bg-white flex justify-center items-center relative">
                    <FiBell className="scale-[1.15]" />
                    <span className="w-[10px] h-[10px] rounded-full absolute top-0 right-0 bg-violet-600"></span>
                </button>
            </div>
        </header>
    );

}