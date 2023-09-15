import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"


function Newmeetup(){
    const router=useRouter()
    async function meetuphandler(data){

       const response=await fetch('/api/newmeetup',{method:'POST',body:JSON.stringify(data),
       headers:{
        'Content-Type':'application/json'

       }
    
    }
    )
    console.log(response)
       const meetupresult=  JSON.stringify(response)
       console.log(meetupresult)
       console.log('how')
       router.push('/')



    }
    return(
        <NewMeetupForm onAddMeetup={meetuphandler}/>
    )

}
export default Newmeetup