  import { useSelector } from "react-redux"
  import {Link} from 'react-router-dom'
  
const UserMenu = () => {
    const user = useSelector((state)=> state.user)

    return (
      <div>
        <div className='font-semibold'></div>
        <div className='text-sm'>{user.name || user.mobile}</div>

           <div className="text-sm grid gap-2">
                <Link to ={""}>Save Address</Link>
                <button className="text-left">Log out</button>
            </div>
        </div>
    )
  }
  
  export default UserMenu
  