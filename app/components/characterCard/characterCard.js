import Image from "next/image";


const CharacterCard = ({ data }) => {


    return (
        <div id='characterCard' className='w-full h-screen bg-[#082f49]'>
                    return (
                        <div key={iden.id} className='relative flex items-center justify-center outline h-auto w-full shadow-xl shadow-gray-400 rounded-sm '>
                            <Image src={picture.image} class="mt-1 rounded-sm" alt={name.name} />
                            <p class='text-white'>{name.name}</p>
                            <p class='text-white'>{nicknames.nicknames}</p>
                        </div>
                    )
        </div>
    );
}

export default CharacterCard;