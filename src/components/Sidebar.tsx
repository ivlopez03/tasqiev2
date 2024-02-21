
import { 
    ChevronUpDownIcon,
} from "@heroicons/react/16/solid"
import {
    CalendarDaysIcon,
    CalendarIcon,
    ChartBarSquareIcon,
    DocumentTextIcon,
    LightBulbIcon,
    PlusCircleIcon,
    RocketLaunchIcon
} from "@heroicons/react/24/outline"
import  HomeIcon from '@/icons/HomeIcon'
import BrainstormIcon from "@/icons/BrainstormIcon"
import RoutineIcon from "@/icons/RoutineIcon"

function Sidebar(){
    return(
        <div className=" w-[280px] min-w-[280px] h-[100vh] p-3 border-r">
            <div className=" border rounded-md p-2 flex items-center relative cursor-pointer hover:bg-[#fafafa] hover:border-transparent">
                <div className="">
                    <img src="/src/assets/photo.jpg" alt="" className="w-[30px] rounded-md"/>
                </div>
                <div className="ml-7 leading-none">
                    <p className=" text-[15px]">Ivan Lopez</p>
                    <span className="text-[13px] text-slate-500">@ivlopez03</span>
                </div>
                <div className="absolute right-5">
                    <ChevronUpDownIcon className="h-4 w-4" />
                </div>
            </div>
            <div className=" mt-4">
                <div>
                    <div className=" hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold">
                        <a href="" className="p-2 flex items-center">
                        <HomeIcon/>
                        <span className=" ml-2 text-sm">Home</span>
                        </a>
                    </div>
                    <div className=" hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold">
                        <a href="" className="p-2 flex items-center">
                        <RocketLaunchIcon className="w-4 h-4" strokeWidth={1}/>
                        <span className=" ml-2 text-sm">My ideas</span>
                        </a>
                    </div>
                    <div className=" hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold">
                        <a href="" className="p-2 flex items-center">
                        <ChartBarSquareIcon className="w-4 " strokeWidth={1} />
                        <span className=" ml-2 text-sm">My productivity</span>
                        </a>
                    </div>
                    <div className=" hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold">
                        <a href="" className="p-2 flex items-center">
                        <RoutineIcon/>
                        <span className=" ml-2 text-sm">Routines</span>
                        </a>
                    </div>
                    <div className=" hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold">
                        <a href="" className="p-2 flex items-center">
                        <CalendarDaysIcon className="w-4 " strokeWidth={1} />
                        <span className=" ml-2 text-sm">Calendar</span>
                        </a>
                    </div>

                   
                </div>
                <div className="mt-4">
                    <hr />
                    <div className=" hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold mt-2">
                        <a href="" className="p-2 flex items-center">
                        <LightBulbIcon className="w-4" strokeWidth={1}/>
                        <span className=" ml-2 text-sm">Capture idea</span>
                        </a>
                    </div>
                    <div className=" hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold">
                        <a href="" className="p-2 flex items-center">
                        <PlusCircleIcon className="w-4" strokeWidth={1}/>
                        <span className=" ml-2 text-sm">Create task</span>
                        </a>
                    </div>
                    <div className=" hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold">
                        <a href="" className="p-2 flex items-center">
                        <DocumentTextIcon className="w-4" strokeWidth={1}/>
                        <span className=" ml-2 text-sm">Create Plan</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-4 h-[45%]">
                <hr />
                <div className="text-sm mt-2 p-2">
                    <p>Workspaces</p>
                </div>
                <div className="text-sm overflow-auto h-[80%]  scrollbar">
                    <div className="ml-4">
                        <div  className="group hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold">
                            <a href="" className="p-2 flex items-center">
                                <div className="border px-[6px] py-[0px] rounded-md group-hover:border-[#3DAF7F]">
                                    <span className=" text-[10px]">W</span>
                                </div>
                                <span className=" ml-2 text-sm">Workspace one</span>
                            </a>
                        </div>
                        <div className="group hover:bg-[#fafafa] hover:text-[#3DAF7F] hover:font-semibold ">
                            <a href="" className="p-2 flex items-center">
                                <div className="border px-[6px] py-[0px] rounded-md group-hover:border-[#3DAF7F]">
                                    <span className=" text-[10px]">W</span>
                                </div>
                                <span className=" ml-2 text-sm">Workspace two</span>
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar