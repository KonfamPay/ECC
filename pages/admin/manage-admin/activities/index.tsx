
        import { useRouter } from 'next/router';
        import Wrapper from "../../../../Components/Admin/Navs/navWrapper";
		
		
		
		import { MutableRefObject } from "react";
		import { format } from "date-fns";
		
const Messages = () => {
	
		
		
	    const router = useRouter()
	    const id= router.query.id
	return (
		
		
		
		
			
				<Wrapper>
				
		        <div>
					<div className='w-full p-4 h-[100px] flex items-center justify-between rounded-t-[20px] bg-eccblue text-white'>
						 <div className='flex flex-row items-center'>
						 <img onClick={()=>router.back()} className='h-[36px] w-[36px]' src="../../icons/arrow.svg" alt="" />
						 <h1 className='ml-4 text-[28px]'>Activities</h1>
						 </div>

						 <div className='flex flex-row items-center'>
						 <h1 className='ml-4 text-[28px]'>	Sort by date</h1>
						 
						 </div>
					</div>
				</div>
					
						
				</Wrapper>
			);
		};
		
		
		


export default Messages;