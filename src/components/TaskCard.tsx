import HighPriorityIcon from "../icons/HighPriorityIcon";
import MediumPriorityIcon from "../icons/MediumPriorityIcon";
import LowPriorityIcon from "../icons/LowPriorityIcon";
import { Task } from "../utils/task-type";
import MenuDotsIcon from "../icons/MenuDotsIcon";
import CalendarIcon from "@/icons/CalendarIcon";



const TaskCard = ({task}: {
    task: Task
}) => {
    return(
        <div className="p-2 m-2 w-[300px] min-w-[300px] h-[90px] max-h-[90px] border rounded-[10px] ">
            <div className="flex justify-between relative">
                <div className="text-[10px] flex">
                    {task.priority === 'high' && <HighPriorityIcon />}
                    {task.priority === 'medium' && <MediumPriorityIcon />}
                    {task.priority === 'low' && <LowPriorityIcon />}
                    <span className="text-[13px] ml-2 text-mainBackgroundColor ">
                        <CalendarIcon/>
                    </span>
                </div>

                <div className="text-[10px]">
                    <MenuDotsIcon/>
                </div>
            </div>
            <div className="relative top-[-7px]">
                <div className="text-[14px] font-medium ">{task.title}</div>
                <div className="text-[12px] text-slate-600">{task.text}</div>
            </div>
            <div className="relative top-[-5px]">
                <div className="text-[11px]">{task.tags}</div>
            </div>    
        </div>
    );
}

export default TaskCard;