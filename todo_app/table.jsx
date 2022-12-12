import { useState } from "react"

const Table=()=>{

    const [name, setName] = useState("");
    const [marks, setMarks] = useState(0);
    const [tableData, setTableData] = useState([]);

    const handleAdd=()=>{
        setTableData([...tableData,{name:name, marks:marks, id:new Date().getTime().toString()}])
        setName("");
        setMarks(0);
    }

    const handleDelete=(value)=>{
        const newData = tableData.filter((data)=>{
            return(
                // data.name !== value.name
                value !== data.id
            )
        });
        setTableData(newData);
    }

    const handleEdit=(value)=>{
        const editedData = tableData.find((data)=>{
            return data.id == value
        });
        setTableData(editedData);
        // handleEdit(value)
    }
    return(
        <>
            <input type="text" onChange={(event)=>{setName(event.target.value)}} value={name}/>
            <input type="number" onChange={(event)=>{setMarks(event.target.value)}} value={marks}/>
            <button onClick={handleAdd}>Add</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((value)=>{
                        return(
                            <tr key={value.id}>
                            <td>{value.name}</td>
                            <td>{value.marks}</td>
                            <button onClick={()=>{handleDelete(value.id)}}>delete</button>
                            <button onClick={()=>{handleEdit(value.id)}}>edit</button>
                        </tr>
                        )
                       
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Table;