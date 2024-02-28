import FolderTree from "@/icons/FolderTree"
import { EllipsisHorizontalIcon, EyeDropperIcon, FaceSmileIcon } from "@heroicons/react/24/solid"
import { DocumentTextIcon } from "@heroicons/react/24/outline"
import React from "react"
import { Link } from "react-router-dom"
import { ChevronDoubleRightIcon, FolderArrowDownIcon } from "@heroicons/react/16/solid"

interface Props{}

const MyideasPage = (props:Props) => {
    return(
      <>
        <div className='w-full p-2'>
          <div className='p-4 relative w-[90%] border-b'>
            <p className='text-xl font-semibold'>My ideas</p>
          </div>

          <div className="relative top-3 flex w-[90%] min-w-[350px]  h-[85vh]">
            <section className=" min-w-[200px] w-[200px] border rounded-md p-3">
              <div className="relative flex items-center content-between ">
                <span className=" font-medium">Collections</span>
                <div className="absolute right-0"><FolderTree/></div>
              </div>
              <hr className="mt-2 mb-2" />
              <div className="relative top-4">
                <div className="group relative text-right hover:bg-[#fafafa] hover:text-[#3DAF7F] rounded-md text-sm">
                  <div className="p-1">
                    <Link to={`/myideas/collections/:backlog`}>Backlog</Link>
                    <span className="ml-3 bg-black rounded-[4px] text-white px-1 py-[2px] text-[11px] group-hover:bg-mainBackgroundColor ">{3}</span> 
                  </div>   
                </div>
                <div className="flex relative items-center p-1 rounded-md">
                  <div className="w-[90%] text-right max-h-[20px] overflow-hidden mr-2 text-sm">
                    {'Collection One'}
                  </div>
                  <div className=" absolute right-0" ><DocumentTextIcon className="w-4 relative top-0.5" strokeWidth={1}/></div>
                </div>
                <div className="flex relative items-center p-1 rounded-md">
                  <div className="w-[90%] text-right max-h-[20px] overflow-hidden mr-2 text-sm">
                    {'Collection two'}
                  </div>
                  <div className=" absolute right-0" ><DocumentTextIcon className="w-4 relative top-0.5" strokeWidth={1}/></div>
                </div>
                <div className="flex relative items-center p-1 rounded-md text-sm">
                  <div className="w-[90%] text-right max-h-[20px] overflow-hidden mr-2">
                    {'Collection three'}
                  </div>
                  <div className=" absolute right-0" ><DocumentTextIcon className="w-4 relative top-0.5" strokeWidth={1}/></div>
                </div>
              </div>
            </section>


            <section className="  w-full  border rounded-md p-3 ml-1">
              <div className="relative flex items-center content-between ">
                
                <span >Collection / <span className=" font-bold">Collection One</span></span>
              </div>
              <hr className="mt-2 mb-2" />
              <div>
                <div>
                  <ChevronDoubleRightIcon className="w-4"/>
                  <textarea  placeholder="Type here ...."></textarea>
                </div>
              </div>

            </section>
          </div>
        </div>
      </>
      
    )
}

export default MyideasPage