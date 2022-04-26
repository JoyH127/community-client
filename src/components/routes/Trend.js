// import axios from "axios";
// import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// const URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=";
// const API_KEY = "364efc32f3d781a4ef5b975d2e25f1f7";
// export default function Trend({ popup, handlePopup }) {
//   const id = useParams();
//   const [trendData, setTrends] = useState([]);

//   const Trend = async () => {
//     try {
//       const response = await axios(`${URL}${API_KEY}`);

//       setTrends(response.data.results);
//     } catch (error) {
//       console.log(error);
//     }

//     useEffect(() => {
//       Trend();
//     }, []);
//   };

//   const PopupRender = () => {
//     return popup ? (
//       <>
//         <div className="popup">
//           <div className="popup-inner">
//             <button
//               className="close-btn"
//               onClick={() => {
//                 handlePopup();
//               }}
//             >
//               close
//             </button>
//           </div>
//         </div>
//       </>
//     ) : (
//       ""
//     );
//   };

//   return (
//     <>
//       <div>{PopupRender()}</div>
//     </>
//   );
// }
