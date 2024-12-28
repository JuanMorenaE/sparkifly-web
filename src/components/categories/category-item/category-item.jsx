import { AiOutlineScissor } from "react-icons/ai";

export const CategoryItem = ({ name }) => {
    return (
        <button className="flex py-[6px] px-[6px] pr-4 justify-center items-center gap-2 bg-white rounded-full">
            <span className="bg-violet-50 p-2 rounded-full">
                <AiOutlineScissor className="text-violet-700" />
            </span>
            <p className="text-xs text-gray-600 text-nowrap">{name}</p>
        </button>
    )
}