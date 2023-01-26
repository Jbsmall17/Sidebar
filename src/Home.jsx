import React from 'react'
import { FaBars } from 'react-icons/fa';
import {Appcontext,useAppConsumer} from './Context'

export default function Home() {
    const {sidebarOpen,modalOpen} = useAppConsumer()
  return (
    <main>
        <button onClick={()=>sidebarOpen()} className="sidebar-toggle">
            <FaBars />
        </button>
        <button className="btn" onClick={()=>{modalOpen()}}>show modal</button>
    </main>
  )
}
