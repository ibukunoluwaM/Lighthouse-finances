import React from 'react'
import { createContext, useState } from 'react'

export const StatContext = createContext();
export  const stats = ["All stats", "Finance", "Capital", "Asset Management"];

function StatProvider(props) {

    const [statistics, setStatistics] = useState(stats[0]);

  return (
   <StatContext.Provider value={{statistics, setStatistics}}>
    {props.children}
   </StatContext.Provider>
  )
}

export default StatProvider;
