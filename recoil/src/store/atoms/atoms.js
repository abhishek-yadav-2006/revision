import { atom, selector } from "recoil";


export  const notificationsAtom = atom({
    default : selector({
        key : "networkAtomSelector",
        get : async ()=> {
            await new Promise((resolve) => setTimeout(resolve, 2000));
              const res  = await fetch("https://sum-server.100xdevs.com/notifications")
              const data = await res.json();
              return data;
        }
    }),
    key : "networkAtom"

})


// export  const messageAtom = atom({
//     default : 0,
//     key : "messageAtom"
// })
// export  const notificationAtom = atom({
//     default : 12,
//     key : "notificationAtom"
// })
// export  const jobsAtom = atom({
//     default : 0,
//     key : "jobsAtom"
// })