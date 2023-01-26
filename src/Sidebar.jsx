import React from 'react'
import {links,social} from './Data'
import logo from "./logo.svg"
import { FaTimes } from 'react-icons/fa';
import { useAppConsumer } from './Context';


export default function Sidebar() {
    const {isSidebarOpen,sidebarClose} = useAppConsumer()
  
    return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar": "sidebar"}`}>
        <div className="sidebar-header">
            <img src={logo} className="logo" alt="codeaddict logo" />
            <button className="close-btn" onClick={()=>sidebarClose()}>
                <FaTimes />
            </button>
        </div>
        <ul className="links">
            {
                links.map((link,index)=>{
                    const {url,text,icon} = link
                    return <li key={index}>
                        <a href={url}>{icon}{text}</a>
                    </li>
                })
            }
        </ul>
        <ul className="social-icons">
            {
                social.map((so,index)=>{
                    const {url,icon} = so
                    return <li key={index}>
                        <a href={url}>{icon}</a>
                    </li>
                })
            }
        </ul>
    </aside>
  )
}
