import { tasks,statuses } from "../utils/task-type";
import TaskCard from "./TaskCard";


function KanbanBoard(){

    const columns = statuses.map((status) =>{
        const tasksInColumn = tasks.filter((task)=> task.status === status)
        return{
            title:status,
            tasks:tasksInColumn
        };
    })

    

    return(
            <div className=" m-5 flex gap-4">
                {columns.map((column)=>{
                    return(
                        <div>
                            <h1 className="capitalize">{column.title} {column.tasks.length > 0 && <span className=" bg-black text-white text-[10px] rounded-[4px] px-[4px] py-[2px] relative top-[-2px] ml-1">{column.tasks.length}</span> } </h1>
                            {column.tasks.map((task) => <TaskCard task={task} />)}
                        </div>
                    );
                })}
            </div>
        );

}

export default KanbanBoard