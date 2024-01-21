import CharacterCard from "@/app/components/characterCard/characterCard";

const Staff = () => {

    return (
        <div id='staff' className='w-full h-screen bg-[#082f49]'>
            <div class='row'>
                <div class='col-2' />
                <div class='col-8'>
                    <h1 class='flex justify-center font-[kepler] text-4xl font-bold text-white pt-8 mb-10'>Staff</h1>
                    <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center text-center'>
                        <CharacterCard />
                    </div>
                    <div class='col-2' />
                </div>
            </div>
        </div>

    );
}

export default Staff;