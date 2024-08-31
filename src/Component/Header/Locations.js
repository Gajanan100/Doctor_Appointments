import React from 'react'
// import { locationList } from './service'
import { useDispatch, useSelector } from 'react-redux'
import { Update_Active_Location } from '../../Provider/reducer/GlobalReducer/globalReducer'

const Locations = ({ onClick }) => {
    const {locations,activeLocation}=useSelector((state)=>state?.globalReducer)
    const dispatch=useDispatch()

    if(!locations) return null
    // console.log(locations);
    // const [loading, setLoading] = useState(false)
    // const [data, setData] = useState([])
    // async function getData() {
    //     setLoading(true)
    //     const result = await locationList()
    //     setData(result || [])
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     getData()
    // }, [])
    // if (loading) return <>Loading...</>
    return (
        <div className='flex gap-2 items-center flex-wrap'>
            {locations?.map(({ id, name, icon: { url } }) => {
                return <div onClick={() => {
                    dispatch({type:Update_Active_Location,payload:name})
                    onClick && onClick(false)
                    }} key={id} className=' text-center cursor-pointer'>
                    <div className={`w-[80px] h-[80px] hover:border-primary border-2 hover:border-2  rounded-md ${activeLocation===name ? "bg-orange-300" : "bg-blue-50"}  p-2 `}>
                        <img src={`http://localhost:1337${url}`} alt="" />
                    </div>
                    <h6 className='text-xs font-mono mt-1'>{name}</h6>
                </div>
            })}
        </div>
    )
}

export default Locations