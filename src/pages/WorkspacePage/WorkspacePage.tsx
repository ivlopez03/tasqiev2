
import KanbanBoard from "@/components/KanbanBoard"
import CarbonSettingsAdjust from "@/icons/CarbonSettingsAdjust"
import {  Cog8ToothIcon, FunnelIcon, PlayIcon, PlusCircleIcon, TagIcon } from "@heroicons/react/24/outline"
import React from "react"

interface Props{}

const WorkspacePage = (props:Props)=>{
    return(
        <>
        <div className='w-full p-2'>
            <div className='p-4 relative w-[90%] border-b'>
                <p className='text-xl font-semibold'>Workspace / Board</p>
                <div className='absolute right-2 bottom-2 '>
                    <button className='border p-1 rounded-md'>
                    <Cog8ToothIcon className='w-4' strokeWidth={1} />
                    </button>
                </div>
            </div>
                
            <div className='mt-1 text-[11px] flex gap-2 p-2'>
                <button className='group flex items-center gap-1 rounded-md border px-2 py-1 hover:bg-[#fafafa]'>
                    <PlusCircleIcon className="w-4 group-hover:fill-secondaryBackgroundColor group-hover:stroke-white" strokeWidth={1}/>
                    <span>Create task</span>
                </button>
                <button className='group flex items-center gap-1 rounded-md border px-2 py-1 hover:bg-[#fafafa]'>
                    <TagIcon className="w-4 group-hover:fill-secondaryBackgroundColor group-hover:stroke-white" strokeWidth={1}/>
                    <span>Label</span>
                </button>
                <button className='group flex items-center gap-1 rounded-md border px-2 py-1 hover:bg-[#fafafa]'>
                    <FunnelIcon className="w-4 group-hover:fill-secondaryBackgroundColor group-hover:stroke-none" strokeWidth={1}/>
                    <span>Filter</span>
                </button>
                <button className='group flex items-center gap-1 rounded-md border px-2 py-1 hover:bg-[#fafafa]'>
                    <CarbonSettingsAdjust/>
                    <span>View</span>
                </button>
                <button className='group flex items-center gap-1 rounded-md border px-2 py-1 hover:bg-[#fafafa] '>
                    <PlayIcon className='w-4 group-hover:fill-secondaryBackgroundColor group-hover:stroke-none' strokeWidth={1}/>
                    <span>Run plan</span>
                </button>
            </div>

            <div> 
                <KanbanBoard/>
            </div>
        
        </div>
        
        </>
    
    )
}

export default WorkspacePage