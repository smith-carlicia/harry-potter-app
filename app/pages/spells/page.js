import { GiSpellBook } from "react-icons/gi";


export default async function Spell() {

    const res = await fetch("https://hp-api.onrender.com/api/spells");
    const spells = await res.json();

    return (
        <div id='staff' className='w-full h-full bg-gradient-to-b from-[#222136] from-10% via-[#272A44] via-30% to-[#2C2D4A] to-90% '>
            <div class='row'>
                <div class='col-2' />
                <div class='col-8'>
                    <h1 class='flex justify-center font-[kepler] text-4xl font-bold text-white pt-8 mb-10'>Spells</h1>
                    <div className='max-w-[1240px] max-h-fit w-full h-full mx-auto flex flex-wrap justify-center items-center text-center space-x-5 space-y-5'>
                        {spells.map((spell) => (
                            <div key={(spell.id)} class="text-white hover:-translate-y-6">
                                <GiSpellBook
                                    class="text-8xl"
                                    width={250}
                                    height={200}
                                />
                                <ul>
                                    <li>{spell.name}</li>
                                </ul>
                                <ul>
                                    <li>{spell.description}</li>
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

// export default Staff;


// export default async function Spells() {

//     const res = await fetch("https://hp-api.onrender.com/api/spells");
//     const spells = await res.json();

//     return (
//         <div id='spells' className='w-full h-screen bg-gradient-to-b from-[#222136] from-10% via-[#272A44] via-30% to-[#2C2D4A] to-90% '>
//             <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center text-center'>
//                 <div class='row'>
//                     <p class='text-white'>Spells</p>
//                     {spells.map((spell) => (
//                         <div key={(spell.id)} class="text-white">
//                             <ul>
//                                 <li>{spell.name}</li>
//                             </ul>
//                             <ul>
//                                 <li>{spell.description}</li>
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>

//     );
// }

