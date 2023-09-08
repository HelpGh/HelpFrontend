// //This section is used to get the time and date for inbox messages
// import moment from 'moment/moment';

// export default useMessage = () => {

//   const getInBoxAndServiceDateMessage = (date,messageTo/**who will view the message */) => {  
//         var current = moment().startOf('day');
//         let rawDate = date.substring(0,10);
//         var given = moment(rawDate, "YYYY-MM-DD");
//         let day =moment.duration(given.diff(current)).asDays().toString();
//         let next = day.substring(0,1) != true ? "last "+day.substring(1) :"next "+day;
//         let want = day.substring(0,1) === "-" ? "wanted" : messageTo === "You" ? "want": "wants";
//         let finalDay = day === "0" ? "Today" : next+" day(s)";
//        let  dayMessage = messageTo+" "+want+" to be serve "+finalDay;
      
//     return dayMessage;
//  };

//  const getInBoxDateMessage = (date)=>{
//     var current = moment().startOf('day');
//         let rawDate = date.substring(0,10).toString();
//         var given = moment(rawDate, "YYYY-MM-DD");
//         let day =moment.duration(given.diff(current)).asDays().toString();
//         console.log(day.substring(1))
//         let finalDay = day === "0" ? "Today" : day.substring(1) + (day.substring(1) === "1" ? " day ago" : " days ago");

//         return finalDay;
//  }



//   return { getInBoxAndServiceDateMessage,getInBoxDateMessage };
// };
