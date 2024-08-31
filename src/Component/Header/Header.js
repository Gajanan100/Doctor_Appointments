import React, { useEffect, useState } from 'react'
import Locations from './Locations'
import { Modal } from 'antd'
import { locationList } from './service'
import { useDispatch, useSelector } from 'react-redux'
import { Update_Location_Data } from '../../Provider/reducer/GlobalReducer/globalReducer'
import { Link } from 'react-router-dom'
import ModalComponent from './ModalComponent'

const Header = () => {
  
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);


  const dispatch=useDispatch()
  const {activeLocation}=useSelector((state)=>state?.globalReducer)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const result = await locationList()
      // setData(result || [])
      dispatch({type:Update_Location_Data,payload:result || []})
      setLoading(false)
  }
      getData()
  }, [dispatch])
console.log(activeLocation);
  return (
    <header className='container mx-auto py-2 flex  items-center flex-wrap'>
        <div className='w-full lg:w-[30%]  flex justify-center'>
            <div className='w-[120px]'>
              <Link to={"/"}><img width={"100%"} src='https://www.askapollo.com/assets/images/askapollo-logo.png' alt='img' /></Link>
            </div>
        </div>
        <div className='w-full lg:w-[50%] '>
            <nav>
                <ul className='flex  justify-end items-center gap-2 flex-wrap text-[12px]'>
                <li><button onClick={() => setOpen(true)} className='border border-primary text-primary text-sm rounded-[3px] text-xs px-2 py-1 uppercase'>{loading? "Loading..." :activeLocation}</button></li>
                <li className='cursor-pointer hover:text-orange-300'><span>Need Help</span></li>
                 <li onClick={() => setIsModalOpen(true)} className='cursor-pointer  hover:text-orange-300'><span>Login-SignUp</span></li>

                </ul>
            </nav>
            {open && <Modal maskClosable={false} closeIcon={false} width={"50%"} title="Popular Cities" open={open} footer={false} onCancel={() => setOpen(false)}>
                    <Locations onClick={setOpen} />
                </Modal>}
                <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    </header>
  )
}

export default Header
