import { useState } from "react"

const Todo=()=>{

    const [item, setItem] = useState("");
    const [userList, setUserList] = useState([]);

    const handleAdd=()=>{
        setUserList([...userList,{name:item}])
        setItem("");
    }
    const clrAll=()=>{
        setUserList([]);
    }
    return(
        <>
            <input type="text" onChange={(event)=>{setItem(event.target.value)}} value={item}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={clrAll}>Clear All</button>

            <ul>
                {userList.map((user, index)=>{
                    return(
                        <>
                            <li key={index}>{user.name}</li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}
export default Todo;