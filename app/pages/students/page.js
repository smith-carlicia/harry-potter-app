import Image from "next/image";
import StudentHouse from "@/app/components/filter/studentHouse/studentHouse";
import StudentAncestry from "@/app/components/filter/studentAncestry/studentAncestry";

export default async function Student() {

    const res = await fetch("https://hp-api.onrender.com/api/characters/students");
    const students = await res.json();

    return (
        <div id='staff' className='w-full h-full  bg-gradient-to-b from-[#222136] from-10% via-[#272A44] via-30% to-[#2C2D4A] to-90% '>
            <div class='row'>
                <div class='col-2' />
                <div class='col-8'>
                    <h1 class='flex justify-center font-[kepler] text-4xl font-bold text-white pt-8 mb-10'>Students</h1>
                    <StudentHouse />
                    <StudentAncestry />
                </div>
                <div className='max-w-[1240px] max-h-fit w-full h-full mx-auto flex flex-wrap justify-center items-center text-center space-x-5 space-y-5'>
                    {students.map((student) => (
                        <div key={(student.id)} class="text-white hover:-translate-y-6 ">
                            <Image src={student.image}
                                class='flex place-content-stretch'
                                width={250}
                                height={200} />
                            <table class="table-auto space-y-5">
                                <tbody>
                                    <tr class='justify-start'>
                                        <td class='justify-start'>
                                            Name:
                                        </td>
                                        <td class='justify-start'>
                                            {student.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class='justify-start'>
                                            Species:
                                        </td>
                                        <td class='justify-start'>
                                            {student.species}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            DOB:
                                        </td>
                                        <td>
                                            {student.dateOfBirth}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Ancestry:
                                        </td>
                                        <td>
                                            {student.ancestry}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            House:
                                        </td>
                                        <td>
                                            {student.house}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Patronus:
                                        </td>
                                        <td>
                                            {student.patronus}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}

                </div>
                <div class='col-2' />
            </div>
        </div>
    );
}

