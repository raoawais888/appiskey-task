import { useSelector , useDispatch} from "react-redux"
import { update } from "../store/slices/listSlice";

const List = () => {

      const dispatch = useDispatch();

    //   get all taks from redux 
      const {tasks}  = useSelector((state)=> state.list);
   
    

  return (
 <>
    <div className="col-md-6 ml-auto shadow p-3 mb-5 bg-white rounded">
        <h2 className="text-center mb-3">List Of Task</h2>

        <table className="table table-bordered table-striped">

            <thead>
                <tr>
                <th>Sr #</th>
                <th>Task Name</th>
                <th>Status</th>
                </tr>
            </thead>
                  
                  <tbody>
                     { tasks.map((list , i)=>{

                       return <tr key={i}>
                             <td>{i + 1}</td>
                             <td>{list.name  } - {list.status == 0 ? <span className='badge badge-warning'>Pending</span> : <span className='badge badge-success'>Completed</span>  }</td>
                             <td>{list.status === 0 ?<button className="btn btn-primary" onClick={()=>{dispatch(update(list.id))}}>click to task compelte</button> : "Task Completed" } </td>
                       </tr>

                     }) }  
                     
                    <tr></tr>


                  </tbody>
        </table>
    </div>

 </>
  )
}

export default List