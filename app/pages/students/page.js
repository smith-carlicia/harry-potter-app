// import CharacterCard from "@/app/components/characterCard/characterCard";

// import { useEffect } from "react";
import Image from "next/image";

export default async function Student() {

    const res = await fetch("https://hp-api.onrender.com/api/characters/students");
    const students = await res.json();

    return (
        <div id='staff' className='w-full h-full  bg-gradient-to-b from-[#222136] from-10% via-[#272A44] via-30% to-[#2C2D4A] to-90% '>
            <div class='row'>
                <div class='col-2' />
                <div class='col-8'>
                    <h1 class='flex justify-center font-[kepler] text-4xl font-bold text-white pt-8 mb-10'>Staff</h1>
                    <div className='max-w-[1240px] max-h-fit w-full h-full mx-auto flex flex-wrap justify-center items-center text-center space-x-5 space-y-5'>
                        {/* <CharacterCard /> */}
                        {students.map((student) => (
                            <div key={(student.id)} class="text-white hover:-translate-y-6 ">
                                <Image src={student.image}
                                    width={250}
                                    height={200} />
                                <table class="table-fixed">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Name
                                            </td>
                                            <td>
                                                {student.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Species
                                            </td>
                                            <td>
                                                {student.species}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                DOB
                                            </td>
                                            <td>
                                                {student.dateOfBirth}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Ancestry
                                            </td>
                                            <td>
                                                {student.ancestry}                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                House
                                            </td>
                                            <td>
                                                {student.house}                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Patronus
                                            </td>
                                            <td>
                                                {student.patronus}                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <ul>
                                    <li>{student.name}</li>
                                </ul>
                                <ul>
                                    <li>{student.species}</li>
                                </ul>
                                <ul>
                                    <li>{student.dateOfBirth}</li>
                                </ul>
                                <ul>
                                    <li>{student.ancestry}</li>
                                </ul>
                                <ul>
                                    <li>{student.house}</li>
                                </ul>
                                <ul>
                                    <li>{student.patronus}</li>
                                </ul> */}
                            </div>
                        ))}

                    </div>
                    <div class='col-2' />
                </div>
            </div>
        </div>

    );
}

// export default Staff;

// // import CharacterCard from "@/app/components/characterCard/characterCard";

// const Students = () => {



//     return (
//         <div id='students' className='w-full h-screen bg-[#082f49]'>
//             <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center text-center'>
//                 <div class='row'>
//                     <p class='text-white'>Students</p>
//                     {/* <CharacterCard /> */}
//                 </div>
//             </div>
//         </div>

//     );
// }

// export default Students;