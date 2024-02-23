import './App.css'
import Sidebar from '../components/Sidebar'

function App() {

  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='w-full p-2'>
        <div className='p-4 relative w-[90%] border-b'>
            <p className='text-xl font-semibold'>My ideas</p>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
