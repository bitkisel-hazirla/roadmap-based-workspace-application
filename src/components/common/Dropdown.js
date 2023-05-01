import {useState} from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
export const Dropdown = ({buttonText,setActiveFilter}) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const handleDropdown = () => {
        setOpenDropdown((prev)=> !prev)
    }
    const changeFilter = (event) => {
        setActiveFilter(event.target.textContent);
        handleDropdown()
    }
    const filters = ['Yearly','Monthly','Weekly','Daily']
    return (
        <div className="relative inline-block text-left">
            <div>
                <button onClick={handleDropdown} type="button" className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {buttonText} <MdKeyboardArrowDown className='text-xl'/>
                </button>
            </div>
            {openDropdown && <div className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-2" >
                <div className="flex flex-col items-start pl-4">
                    {filters.map((item,index) => {
                        return <button className='border-b-4' key={index} onClick={changeFilter}>{item}</button>
                    })}
                </div>
            </div>}
        </div>
    )
}