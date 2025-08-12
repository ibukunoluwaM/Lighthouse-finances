import React from 'react'
import { createContext, useState } from 'react'

export const RoleContext = createContext();
export  const roles = ["Finance", "Super Admin", "Capital Group", "Add Role", "Log Out"]

function RoleProvider(props) {

    const [role, setRole] = useState(roles[1]);

  return (
   <RoleContext.Provider value={{role, setRole}}>
    {props.children}
   </RoleContext.Provider>
  )
}

export default RoleProvider;
