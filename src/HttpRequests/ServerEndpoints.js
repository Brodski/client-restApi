import axios from 'axios';
import { Subscription } from '../Classes/Subscription';
import { User, CustomShelf } from '../Classes/User';


export async function getDummyUser() {

  return "this is dummy user from backend, after a post to localhost"

}

export function getMockUser() {
  let sub1 = new Subscription()
  sub1.channelName = "The Hill"
  sub1.channelId = "UCPWXiRWZ29zrxPFIQT7eHSA";
  sub1.filter.minDuration = "1"
  sub1.filter.maxDuration = "0.5"
  sub1.filter.blacklist = "the hill: pompous liberal douche"



  let sub1B = new Subscription()
  sub1B.channelName = "CNN"
  sub1B.channelId = "UCupvZG-5ko_eiXAupbDfxWw";

  let sub1C = new Subscription()
  sub1C.channelName = "Fox News"
  sub1C.channelId = "UCXIJgqnII2ZOINSWNOGFThA";
  sub1C.filter.minDuration = "6"
  sub1C.filter.blacklist = "Fox News: angry hill billy"

  let sub2 = new Subscription()
  sub2.channelName = "Crunkmastaflexx"
  sub2.channelId = "UCA-8h5uCH5RE-1r6gskkbTw";

  let sub3 = new Subscription()
  sub3.channelName = "Deep Beat"
  sub3.channelId = "UC0CeYMTh57zSsbUKhsyOPfw";

  let sub4 = new Subscription()
  sub4.channelName = "Video Box"
  sub4.channelId = "UCeMFHOzX9MDWbr-pu2WdmVw";

  let sub5 = new Subscription()
  sub5.channelName = "mineralblue"
  sub5.channelId = "UC3IngBBUGFUduHp-7haK1lw";

  let sub6 = new Subscription()
  sub6.channelName = "SMTOWN"
  sub6.channelId = "UCEf_Bc-KVd7onSeifS3py9g";

  let uSub1 = new Subscription()
  uSub1.channelName = "Key & Peele"
  uSub1.channelId = "UCdN4aXTrHAtfgbVG9HjBmxQ";
  
  let uSub2 = new Subscription()
  uSub2.channelName = "Tommy Boy"
  uSub2.channelId = "UCnSR7_Oq-MdsZxfogsfk-Ug";
    
  let uSub3 = new Subscription()
  uSub3.channelName = "FRONTLINE PBS | Official"
  uSub3.channelId = "UC3ScyryU9Oy9Wse3a8OAmYQ";
  

  
  let uSub4 = new Subscription()
  uSub4.channelName = 'Google Zeitgeist'
  uSub4.channelId = 'UC522meTsOjFWjSdLLrEMMBA';
  

  let uSub5 = new Subscription()
  uSub5.channelName = 'Maddox'
  uSub5.channelId = 'UC_c1gdsojLxBGkgzS0NsvUw';
  
  let uSub6 = new Subscription()
  uSub6.channelName = 'Asian Boss'
  uSub6.channelId = 'UC2-_WWPT_124iN6jiym4fOw';
  

  let uSub7 = new Subscription()
  uSub7.channelName = 'TED'
  uSub7.channelId = 'UCAuUUnT6oDeKwE6v1NGQxug';



  let u = new User()
  u.userId = "123-UserId";
  u.fullName = "Richard Simmons"
  u.subscriptions.push(sub1, sub1C, sub1B, sub2, sub3, sub4, sub5, sub6)
  //u.unsortedSubs.push( uSub1, uSub2, uSub3)

  let cShelf1 = new CustomShelf()
  cShelf1.title = "Shelf #1"
  cShelf1.fewSubs.push(sub1, sub1B, sub1C)
  cShelf1.isSorted = true;

  let cShelf2 = new CustomShelf()
  cShelf2.title = "Shelf #2"
  cShelf2.fewSubs.push(sub3, sub6)
  cShelf2.isSorted = true;

  let cShelf3un = new CustomShelf()
  cShelf3un.title = "Shelf #1 unsorted"
  cShelf3un.fewSubs.push( uSub1, uSub2, uSub3)
  cShelf3un.isSorted = false;

  let cShelf4un = new CustomShelf()
  cShelf4un.title = "Shelf #4"
  cShelf4un.fewSubs.push( uSub4, uSub6)
  cShelf4un.isSorted = true;
  
  let cShelf5un = new CustomShelf()
  cShelf5un.title = "Shelf #5"
  cShelf5un.fewSubs.push( uSub7)
  cShelf5un.isSorted = true;

  let cShelf6un = new CustomShelf()
  cShelf6un.title = "Shelf #6"
  cShelf6un.fewSubs.push( uSub5)
  cShelf6un.isSorted = true;

  u.customShelfs.push(cShelf1)
  u.customShelfs.push(cShelf2)
  u.customShelfs.push(cShelf3un)
  u.customShelfs.push(cShelf4un)
  u.customShelfs.push(cShelf5un)
  u.customShelfs.push(cShelf6un)
  return u;
}