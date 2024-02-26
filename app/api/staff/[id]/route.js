import { NextResponse } from "next/server";
import { useEffect } from "react";

// export async function GET(request, {params}) {
//     const id = params.id;
//     const {searchParams} = request.nextUrl;
//     const sort = searchParams.get("sort");
//   return NextResponse.json({'https://hp-api.onrender.com/api/characters/staff': {status:200}})
// }

const StaffAPI = () => {

    // const [staffInfo, setStaffInfo] = useState()
    // const apiURL = "https://hp-api.onrender.com/api/characters/staff";
    // let displayData;

    // async function staffData() {
    //     const response = await fetch(apiURL)
    //     const responseData = await response.json()
    //     console.log(responseData);

    //     displayData = responseData.map(function(staff){
    //         return(
    //             <p key={staff.id}>{staff.name}</p>
    //         )
    //     })
    //     setStaffInfo(displayData);
    // }
    useEffect(() => {
        const getData = async() => {
            const query = await fetch ('https://hp-api.onrender.com/api/characters/staff');
            const response = await query.json();
            console.log('response from API', response);
        }
        getData();
    }, [])

    return(
        <div>
            <h3>Data</h3>
        </div>
    )
}

export default StaffAPI;
