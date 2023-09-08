import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

// const Category = [
//     {imageUri:require('../assets/images/cat1.png'),label:'BarberShop',value:'barber',snippet:'85 Places',id:1},
//         {imageUri:require('../assets/images/cat2.png'),label:'Salon',value:'salon',snippet:'85 Places',id:2},
//         {imageUri:require('../assets/images/cat3.png'),label:'Spa',value:'spa',snippet:'85 Places',id:3},
//         {imageUri:require('../assets/images/cat4.png'),label:'Make-Up',value:'makeup',snippet:'85 Places',id:4},
//         {imageUri:require('../assets/images/cat5.png'),label:'Photographers',value:'Photographers',snippet:'85 Places',id:5},
//   ];
const Region = [
         {
            id:1,
            label:"Greater Accra",
            value:"Greater Accra",
         },
         {
            id:2,
            label:"Ashanti",
            value:"Ashanti",
         },
         {
            id:3,
            label:"Northern",
            value:"Northern",
         },
         {
            id:4,
            label:"Western",
            value:"Western",
         },
         {
            id:5,
            label:"Votal",
            value:"Votal",
         },
         {
            id:6,
            label:"Eastern",
            value:"Eastern",
         },
                   {
                     id:7,
                    label:"Upper West",
                   value:"Upper West",
                },
                   {
                     id:8,
                    label:"Upper East",
                   value:"Upper East",
                },
                   {
                     id:9,
                    label:"Central",
                   value:"Central",
                },
                   {
                     id:10,
                    label:"Bono East",
                   value:"Bono East",
                },
                   {
                     id:11,
                    label:"Bono",
                   value:"Bono",
                },
                   {
                     id:12,
                    label:"Ahafo",
                   value:"Ahafo",
                },
                   {
                     id:13,
                    label:"Savannah",
                   value:"Savannah",
                },
                   {
                     id:14,
                    label:"North-East",
                   value:"North-East",
                },
                   {
                     id:15,
                    label:"Oti",
                   value:"Oti",
                },
                   {
                     id:16,
                    label:"Western North",
                   value:"Western North",
                },
]

const Department = [{
   id: 1, // acts as primary key, should be unique and non-empty string
   label: 'Police',
   value: 'Police',
   icon:<MaterialIcons name="local-police" size={24} color="black" />,
   selected:true
 }, {
   id: 2,
   label: 'Fire Service',
   value: 'fire_service',
   icon:<MaterialCommunityIcons name="fire-truck" size={24} color="black" />
   
},{
    id: 3,
    label: 'Ambulance',
    value: 'ambulance',
    icon:<MaterialCommunityIcons name="ambulance" size={24} color="black" />,
  }]
const Category = [{
   id: 1, // acts as primary key, should be unique and non-empty string
   label: 'House Guard',
   value: 'house_guard',
   selected:true
 }, {
   id: 2,
   label: 'Office Guard',
   value: 'office_guard',
   
},{
    id: 3,
    label: 'Occasion Guard',
    value: 'occasion_guard',
  }]



// ================================
// ================================

export default {
    Region,
    Department,
    Category
}