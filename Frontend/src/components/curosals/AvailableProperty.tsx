
import CardCourasal from './CardCourasal'

function AvailableProperty() {
  return (
    <div className='text-start bg-blue-50 p-5'>
        <text className='text-center'>
       <p className='text-4xl text-black font-extrabold  ml-6 mb-2'> Available properties</p>
       <p className='text-yellow-500 text-xl mb-8'>Check your dream resident, where your happiness lives</p>
       </text>
        <div className=' bg-slate-200 py-4 px-2 '>
            <CardCourasal/>
        </div>
    </div>
  )
}

export default AvailableProperty