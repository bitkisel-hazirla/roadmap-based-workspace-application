import { BsLightningCharge, BsFileCode } from 'react-icons/bs'
import { AiOutlineCheckCircle,AiOutlineSetting } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'
import {RiRoadMapLine} from 'react-icons/ri'

export const main = [
    {
        icon: <BsLightningCharge className='icon'/>,
        title: 'Activity',
        link: 'activity',
        index: 0
    },
    {
        icon:<AiOutlineCheckCircle className='icon'/> ,
        title: 'My Tasks',
        link: 'mytasks',
        index: 0
    },
    {
        icon: <BsLightningCharge className='icon'/>,
        title: 'Timer',
        link: 'timer',
        index: 1
    },
    {
        icon:  <RiRoadMapLine className='icon'/>,
        title: 'Roadmaps',
        link: 'roadmaps',
        index: 1
    },
    {
        icon:  <BsFileCode className='icon'/>,
        title: 'Sources',
        link: 'sources',
        index: 1
    },
    {
        icon: <AiOutlineSetting className='icon'/>,
        title: ' Settings',
        link: 'settings',
        index: 2
    },
    {
        icon: <FiHelpCircle className='icon'/> ,
        title: 'Help',
        link: 'help',
        index: 2
    }              
]