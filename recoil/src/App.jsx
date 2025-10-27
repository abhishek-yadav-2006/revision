import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
// import './App.css'

import { useEffect, useMemo } from 'react';
import {  totalnotificationsSelector } from './store/selectors/selector';
import { notificationsAtom } from './store/atoms/atoms';




function App() {
  return (

    <RecoilRoot>

     <MainApp />
    </RecoilRoot>
  );
}



function MainApp(){
  // const notificationCount = useRecoilValue(notificationAtom)
  //  const jobsCount = useRecoilValue(jobsAtom)
  //  const [messageCount, setMessageCount] = useRecoilState(messageAtom)
  //  const networkCount = useRecoilValue(networkAtom)
  //  const totalCount = useMemo(()=>{
  //   return notificationCount + jobsCount + messageCount + networkCount
  //  }, [notificationCount, jobsCount, messageCount, networkCount]);

  const [networkCount,setNetworkCount] = useRecoilState(notificationsAtom)
  const allnotifications = useRecoilValue(totalnotificationsSelector)

  useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/notifications").then((res)=>{
          setNetworkCount(res.data)
      })
      console.log(res.data)
  })
   return (
    <div>
      <button>Home</button>
      <button>notifications ({networkCount.notifications})</button>
      <button>messages ({messageCount > 100  ? "99+" : messageCount})</button>
      <button>jobs ({jobsCount > 100  ? "99+" : jobsCount})</button>
      <button>network ({networkCount > 100  ? "99+" : networkCount})</button>
      <button >me({allnotifications})</button>
      
    </div>
   )
}
export default App;