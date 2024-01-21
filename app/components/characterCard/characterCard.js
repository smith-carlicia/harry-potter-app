

const CharacterCard = ({ img, info, name, nicknames, species, gender, house, dob, wizard, ancestry, eye, hair, wand, patronus, student, staff, mortality }) => {



    return (
        <div id='characterCard' className='w-full h-screen bg-[#082f49]'>
            <div className='relative flex items-center justify-center outline h-auto w-full shadow-xl shadow-gray-400 rounded-sm '>
                        <p class='text-white'>Character</p>
                                    {/* <Image src={img} class="mt-3 rounded-sm group-hover:opacity-10" alt={info}/>
                <h3 class='font-[kepler] text-white text-center'>{name}</h3>
                <h4 class='font-[kepler] text-white text-center'>{nicknames}</h4>
                <h4 class='font-[kepler] text-white text-center'>{species}</h4>
                <h4 class='font-[kepler] text-white text-center'>{gender}</h4>
                <h4 class='font-[kepler] text-white text-center'>{house}</h4>
                <h4 class='font-[kepler] text-white text-center'>{dob}</h4>
                <h4 class='font-[kepler] text-white text-center'>{wizard}</h4>
                <h4 class='font-[kepler] text-white text-center'>{ancestry}</h4>
                <h4 class='font-[kepler] text-white text-center'>{eye}</h4>
                <h4 class='font-[kepler] text-white text-center'>{hair}</h4>
                <h4 class='font-[kepler] text-white text-center'>{wand}</h4>
                <h4 class='font-[kepler] text-white text-center'>{patronus}</h4>
                <h4 class='font-[kepler] text-white text-center'>{student}</h4>
                <h4 class='font-[kepler] text-white text-center'>{staff}</h4>
                <h4 class='font-[kepler] text-white text-center'>{mortality}</h4> */}

                    {/* <table class="border-collapse border border-slate-500 ...">
                        <thead>
                            <tr>
                                <th class="border border-slate-600 ...">State</th>
                                <th class="border border-slate-600 ...">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-700 ...">Indiana</td>
                                <td class="border border-slate-700 ...">Indianapolis</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-700 ...">Ohio</td>
                                <td class="border border-slate-700 ...">Columbus</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-700 ...">Michigan</td>
                                <td class="border border-slate-700 ...">Detroit</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
    );
}

export default CharacterCard;