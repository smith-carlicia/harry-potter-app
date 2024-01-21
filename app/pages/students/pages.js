import CharacterCard from "@/app/components/characterCard/characterCard";

const Students = () => {



    return (
        <div id='students' className='w-full h-screen bg-[#082f49]'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center text-center'>
                <div class='row'>
                    <p class='text-white'>Students</p>
                    <CharacterCard />
                </div>
            </div>
        </div>

    );
}

export default Students;