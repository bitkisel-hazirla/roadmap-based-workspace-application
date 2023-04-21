import { SearchBar } from "./common/SearchBar"
import { taskTableColumns as tableColumns } from "../utils/constants/tasks"

export const Table = () => {
    return (
      <>
      <div style={{height:'4rem',backgroundColor:'597D9D', color:'white'}} className='flex items-center px-4 justify-between rounded-t-lg'>
        <h1 className="text-lg font-semibold">Tasks List</h1>
        <div className="pr-5 flex gap-2">
          <SearchBar/>
          <button style={{backgroundColor:'E6F2FF',color:'black'}} className="px-20 py-2 rounded-lg ">Create Task</button>
        </div>
      </div>
        <table className="table-fixed w-full">
  <thead>
    <tr>
      {tableColumns.map((item,index)=> {
        return <th style={{backgroundColor:'#F6F6F6'}} key={index}>{item}</th>
      })}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
  </tbody>
</table>
</>
    )
}