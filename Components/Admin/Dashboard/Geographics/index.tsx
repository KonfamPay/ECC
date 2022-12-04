import dynamic from 'next/dynamic';
import { States } from './../../../../types/complaintTypes.d';

const MapComp: any = dynamic(() => import('./Map') as any, { ssr: false });
interface GeographicsProps{
    states:States[]
}

const Geographics:React.FC<GeographicsProps> = ({states}) => {
    const sortedStates = states.sort((a,b)=>b.users-a.users)
    const topStates= sortedStates.slice(0,6)
    
    const getPercentage= (usersInState:number)=>{
        let totalUsers=0
        sortedStates.forEach((state)=> totalUsers+=state.users)
        const percentage = (usersInState/totalUsers)*100
        return Math.round(percentage)
    }
    
   
    
    
    return ( 
        <div className="bg-white rounded-[10px] h-[600px] w-full max-w-[600px] ">
           <div className="w-full flex flex-row justify-between items-center px-4 h-[70px] border-b border-[#c5c5c5] ">
				<h1 className="text-black text-[18px] font-medium">Live users by state</h1>
				<button className="p-2 rounded-md text-eccblue bg-[#F1F7FE] text-[14px] hover:scale-110 transition-[1000ms] flex flex-row items-center gap-x-4"><img src="../../icons/admin-icons/download-icon.svg" alt="" /><p> Download full report</p></button>
			</div>
            <div className='w-full h-[256px]'>
                
               <MapComp states ={topStates} /> 
            </div>
            <div className='w-full bg-clearblue text-center mb-[30px] text-eccblue border-y border-dashed flex justify-center items-center  border-y-eccblue h-[45px]'><p> Total percentage of users per state</p></div>
            <div className='grid grid-cols-2 gap-y-[30px] '>
                {
                    topStates.map((state)=> 
                    
                    <div key={state.name} className='px-4 gap-y-6'>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='font-medium '>{state.name}</p>
                            <p className='text-[#999999]'>{`${getPercentage(state.users)}%`}</p>
                        </div>
                        <div className='h-[3px] rounded-md w-full bg-[#d3d3d3]'>
                          <div style={{width: `${getPercentage(state.users)}%`}} className={`h-full rounded-md bg-eccblue  `}></div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
     );
}
 
export default Geographics;