import Link from 'next/link';
import { PiEyeglassesLight } from "react-icons/pi";

const StudentBtnCard = ({ proUrl, info }) => {
    return (
        <div class="relative flex items-center justify-center h-auto w-full  rounded-sm group mb-4">
            <div>
                <PiEyeglassesLight class="flex items-center justify-center text-[#365F5E] text-8xl hover:animate-pulse pb-15" alt={info}/>
                <button type="button" class="px-10 py-3  mr-10 mt-8 rounded-md bg-[#231C33] hover:bg-[#3A3366] flex items-center justify-center shadow-lg shadow-slate-800">
                    <Link class='no-underline  font-[europa] text-white font-semibold text-lg tracking-wider' href={proUrl}>
                        Students
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default StudentBtnCard;