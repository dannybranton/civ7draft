// import { useState } from 'react'
// import './App.css'

// import {
//   google,   // The top level object used to access services
//   sheets_v4, // For every service client, there is an exported namespace
// } from 'googleapis';

// function Sheets() {
//   const auth = new google.auth.GoogleAuth();
//   const sheets: sheets_v4.Sheets = google.sheets({
//     version: 'v4',
//     auth,
//   });

//   const spreadsheetId = '10nRV1aL7zMQlCQZpaY2TeURpC_XuXnXWY4fW8Q_hJi4';

//   //GET /v4/spreadsheets/{spreadsheetId}

//   async function getDannySpreadsheet() {
//     const params = {
//       spreadsheetId: spreadsheetId
//     }
//     const res = await sheets.spreadsheets.get(params);
//     console.log(`The response data is ${res.data}`);
//   }

//   getDannySpreadsheet().catch(console.error);

//   return (
//     <>
//     </>
//   )
// }

// export default Sheets
