import Link from 'next/link';
import { GiCastle } from "react-icons/gi";

const StaffBtnCard = ({ proUrl, info }) => {
    return (
        <div class="relative flex items-center justify-center h-auto w-full  rounded-sm group mb-4" alt={info}>
            <div>
                <GiCastle class="flex items-center justify-center text-[#365F5E] text-8xl animate-pulse pb-15"/>
                <button type="button" class="px-10 py-3  mr-10 mt-8 rounded-md bg-[#231C33] hover:bg-[#3A3366] flex items-center justify-center">
                    <Link class='no-underline  font-[europa] text-white font-semibold text-lg tracking-wider' href={proUrl}>
                        Staff
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default StaffBtnCard;