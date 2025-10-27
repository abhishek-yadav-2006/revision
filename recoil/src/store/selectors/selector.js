import { selector } from "recoil";
import {  notificationsAtom } from "../atoms/atoms";



export const totalnotificationsSelector = selector({
    key : "totalnotifications",
   get : ({get}) => {
       const allnotifications = get(notificationsAtom);
       return allnotifications.network +
       allnotifications.jobs +
       allnotifications.notifications +
       allnotifications.messaging
   }
    
})