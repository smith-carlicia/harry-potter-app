import Image from "next/image";
import StaffAncestry from "@/app/components/filter/staffAncestry/staffAncestry";
import StaffSpecies from "@/app/components/filter/staffSpecies/staffSpecies";
import StudentHouse from "@/app/components/filter/studentHouse/studentHouse";

export default async function Student() {

    const res = await fetch("https://hp-api.onrender.com/api/characters/staff");
    const staffs = await res.json();

    return (
        <div id='staff' className='w-full h-full bg-gradient-to-b from-[#222136] from-10% via-[#272A44] via-30% to-[#2C2D4A] to-90% '>
            <div class='row'>
                <div class='col-2' />
                <div class='col-8'>
                    <h1 class='flex justify-center font-[kepler] text-4xl font-bold text-white pt-8 mb-10'>Staff</h1>
                    <div class='flex flex-wrap items-stretch'>
                        <StaffAncestry />
                        <StaffSpecies />
                        <StudentHouse />
                    </div>
                    <div className='max-w-[1240px] max-h-fit w-full h-full mx-auto flex flex-wrap justify-center items-center text-center space-x-5 space-y-5'>
                        {staffs.map((staff) => (
                            <div key={(staff.id)} class="text-white">
                                <Image src={staff.image}
                                    width={250}
                                    height={200} />
                                <ul>
                                    <p>Name</p>
                                    <li>{staff.name}</li>
                                </ul>
                                <ul>
                                    <p>Species</p>
                                    <li>{staff.species}</li>
                                </ul>
                                <ul>
                                    <p>DOB</p>
                                    <li>{staff.dateOfBirth}</li>
                                </ul>
                                <ul>
                                    <p>Ancestry</p>
                                    <li>{staff.ancestry}</li>
                                </ul>
                                <ul>
                                    <p>Patronus</p>
                                    <li>{staff.patronus}</li>
                                </ul>
                            </div>
                        ))}

                    </div>
                    <div class='col-2' />
                </div>
            </div>
        </div>

    );
}

// const items = [
//     {
//       title: 'House',
//       content: (
        
//       ),
//     },
//     {
//       title: 'Ancestry',
//       content: (
//         <div className='border-2 border-blue-400 rounded-lg p-4'>
//           <h1 className='text-3xl text-blue-600'>Title Test 2</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
//             aperiam asperiores dolo iti harum! Totam, mollitia quos voluptatem
//             deleniti provident obcaecati rerum.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: 'Species',
//       content: (
//         <div className='border-2 border-blue-400 rounded-lg p-4'>
//           <h1 className='text-3xl text-blue-600'>Title Test 3</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
//             aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
//             earum illum qui similique architecto dolorum, minima enim quidem
//             voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
//             deleniti provident obcaecati rerum. amet consectetur adipisicing elit.
//             Dolores aperiam asperiores doloribus velit dolore magnam ex
//             consectetur fugit earum illum qui similiq
//           </p>
//         </div>
//       ),
//     },
//   ];