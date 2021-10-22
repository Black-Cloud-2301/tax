import React,{useContext,useState,useEffect} from 'react'

const AppContext = React.createContext();

let employeeDefault = {
  id:'',
  name: '',
  day: 1,
  month: 1,
  year: 2021,
  phone: '',
  email: '',
  address: '',
  taxYear: 2021,
  bhxh: false,
  dependent: 0,
  valueMonth1: 0,
  valueMonth2: 0,
  valueMonth3: 0,
  valueMonth4: 0,
  valueMonth5: 0,
  valueMonth6: 0,
  valueMonth7: 0,
  valueMonth8: 0,
  valueMonth9: 0,
  valueMonth10: 0,
  valueMonth11: 0,
  valueMonth12: 0,
}; 

const getLocal = () => {
  const data = localStorage.getItem('employees');
  return data? JSON.parse(data) : [];
}

const AppProvider = ({children}) => {
    const [employee,setEmployee] = useState(employeeDefault);
    const [isAdd,setIsAdd] = useState(false)
    const [listEmploy,setListEmploy] = useState(getLocal());
    
    const handleAddEmployee = () => {
        setListEmploy([...listEmploy,employee])
        setEmployee(employeeDefault);
        setIsAdd(!isAdd)

    }
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(listEmploy))
    },[isAdd])

    return <AppContext.Provider
        value={{
            setEmployee,employee,handleAddEmployee,listEmploy
        }}>
    {children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider}