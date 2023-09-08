// import * as FileSystem from 'expo-file-system';
// import * as Sharing from 'expo-sharing';
// import { Platform } from 'react-native';
// export default useMessage = () => {

//   const share =async (imageUri) => {  
//         try {
//           const fileUri = FileSystem.cacheDirectory + 'image.jpg';
//           await FileSystem.makeDirectoryAsync(FileSystem.cacheDirectory + 'images/', {intermediates: true}); // create directory if it doesn't exist
//           await FileSystem.downloadAsync(imageUri, fileUri); // download 
//         //   whatsAppShare(fileUri,mobileNumber);
//         console.log('========DONE DOWNLOADING==========');
//         console.log(fileUri);
//         await Sharing.shareAsync(fileUri)
//         console.log('====================================');
//         } catch (error) {
//           console.log('ListingDetailsScreen.js',error.message);
//         }
//         let openShareDialogAsync = async (uri) => {
//             if (Platform.OS === 'web') {
//               alert(`Uh oh, sharing isn't available on your platform`);
//               return;
//             }
        
//             // await Sharing.shareAsync(uri);
//           };
      
//     return true;
//  };

//   return { share };
// };
