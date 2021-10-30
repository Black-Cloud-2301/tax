import React,{useContext,useState,useEffect} from 'react'

const AppContext = React.createContext();

let employeeDefault = {
  department:'',
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
let exceptDefault = {
    bhxhExcept: 0.08,
    dependentExcept: 4.4,
    deductibleLevel: 11,
}
const getExcept = () => {
    const data = localStorage.getItem('except');
        return data? JSON.parse(data) : exceptDefault;
}
const getLocal = () => {
  const data = localStorage.getItem('employees');
  return data? JSON.parse(data) : [];
}
const getDepartment = () => {
  const data = localStorage.getItem('department');
  return data? JSON.parse(data) : [];
}

let deDefault ={
    id: '',
    department:''
}
const AppProvider = ({children}) => {
    const [employee,setEmployee] = useState(employeeDefault);
    const [isAdd,setIsAdd] = useState(false)
    const [isAddDp,setIsAddDp] = useState(false)
    const [listEmploy,setListEmploy] = useState(getLocal());
    const [departmentTemp,setDepartmentTemp] = useState(deDefault);
    const [listDepartment,setListDepartment] = useState(getDepartment());
    const [isRemove,setIsRemove] = useState(false);
    const [except,setExcept] = useState(getExcept());


    const handleAddEmployee = () => {
        setListEmploy([...listEmploy,employee])
        setEmployee(employeeDefault);
        setIsAdd(!isAdd)

    }
    const handleOutput = (value) => {
        // console.log('cnotext',employee)
        // console.log('listcon',listEmploy)
        setIsRemove(!isRemove);
        console.log(value);
        // console.log('listcon',listEmploy)
        setListEmploy([...value,employee])
        setIsAdd(!isAdd)
        // localStorage.setItem('employees', JSON.stringify(listEmploy));
    }
    const handleDelete = (id) => {
        const newList = listEmploy.filter((item) => item.id!==id);
        console.log(newList)
        // localStorage.removeItem('employees');
        localStorage.setItem('employees', JSON.stringify(newList));

    }
    const resetListEmploy = (value) => {
        setListEmploy(value);
        console.log(listEmploy)
        localStorage.removeItem('employees');
    }
    
    const handleChangeExcept = () => {
        localStorage.setItem('except', JSON.stringify(except));
    }

    const addDepartment = (e) => {
        setListDepartment([...listDepartment,departmentTemp]);
        setDepartmentTemp(deDefault);
        e.preventDefault();
        setIsAddDp(!isAddDp)
    } 
    useEffect(() => {
        localStorage.removeItem('employees');
    },[isRemove])
    useEffect(() => {
        localStorage.setItem('department', JSON.stringify(listDepartment))
    },[isAddDp])

    useEffect(() => {
        console.log('add',listEmploy)
        localStorage.setItem('employees', JSON.stringify(listEmploy))
    },[isAdd])

    return <AppContext.Provider
        value={{
            setEmployee,employee,handleAddEmployee,listEmploy,handleDelete,
            departmentTemp,listDepartment,setDepartmentTemp,addDepartment,resetListEmploy,handleOutput,
            except,setExcept,handleChangeExcept
        }}>
    {children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider}