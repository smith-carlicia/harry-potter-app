import StaffBtnCard from "./components/staffBtnCard/staffBtnCard";
import StudentBtnCard from "./components/studentBtnCard/studentBtnCard";
import SpellsBtnCard from "./components/spellsBtnCard/spellsBtnCard";





export default function Home() {
  return (
    <div id='home' className='twinkle w-full h-screen  bg-gradient-to-b from-[#222136] from-10% via-[#272A44] via-30% to-[#2C2D4A] to-90% ... '>
      <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center text-center'>
        <div class="row">
          <h1 class="text-white text-bold text-5xl p-10">WELCOME TO THE WORLD OF HARRY POTTER</h1>
          <div class='flex flex-row space-x-20 space-y-19'>
            <StaffBtnCard 
              proUrl={'./pages/staff/page'} 
              alt="staffbutton" 
            />
            <StudentBtnCard 
              proUrl={'./pages/students/page'} 
              alt="studentsbutton" 
            />
            <SpellsBtnCard 
              proUrl={'./pages/spells/page'} 
              alt="studentsbutton"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
