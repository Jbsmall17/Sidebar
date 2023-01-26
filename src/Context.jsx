import React,{useState,useContext} from 'react'

const contextVariable = React.createContext() 

export const Appcontext = ({children}) =>{
    const [isModalOpen,setModalOpen] = useState(false)
    const [isSidebarOpen,setSidebarOpen] = useState(false)
    const sidebarOpen = () =>{
        setSidebarOpen(true)
    }
    const sidebarClose = () =>{
        setSidebarOpen(false)
    }
    const modalOpen = () =>{
        setModalOpen(true)
    }
    const modalClose = () =>{
        setModalOpen(false)
    }
    return (
    <contextVariable.Provider
        value={{isModalOpen,isSidebarOpen,sidebarClose,sidebarOpen,modalClose,modalOpen}}
    >
        {children}
    </contextVariable.Provider>)
}

export const useAppConsumer = () =>{
    return useContext(contextVariable)
} 