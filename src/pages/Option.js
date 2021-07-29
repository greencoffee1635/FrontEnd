// import React from "react";


// // shared
// import Header from "../shared/Header";
// import Layout from "../shared/Layout";


// // components

// // css
// import "../css/option/text.scss";
// import "../css/option/button.scss"

// export const Option01 =()=>{

//   return(
//   <>
//     <Header />
//     <Layout>
//       <div className="center">
//         <div className="question">
//           01.<br/>
//           <br/>
//           언제 출발 예정이신가요?
//         </div>
//       </div>

//       <div className="center">
//         <div className="calendar">달력</div>

//         {/* <button className="undecided">
//            아직 미정입니다
//         </button> */}

//         {/* <div className="question">
//           출발 날짜가 미정이라면 월만 정해주세요.
//         </div> */}
//         <button className="button"
//         onClick={Option02}>다음으로</button>  
//       </div>  
//     </Layout>

//   </>
//   )
// }

// export const Option02 =()=>{

//   return(
//   <>
//     <Header />
//     <Layout>
//       <div className="center">
//         <div className="question">
//           02.<br/>
//           <br/>
//           출발일이 미정이라면 대략적인 월을 정해주세요
//         </div>
//        </div>
      
//       <div className="center">
//         <button className="button">다음으로</button>  
//       </div>  
//     </Layout>
//   </>
//   )
// }


// export const Option03 =()=> {
//   return(
//   <>
//     <Header/>
//     <Layout>
//       <div className="center">
//         <div className="question">
//           03.<br/>
//           <br/>
//           출발하시는 곳을 알려주세요
//         </div>

//         <div className="center">
//         <input className="address"
//           placeholder="  시/구까지 입력해주세요"></input>

//         <button className="button">다음으로</button>
//         </div>
//       </div>
//     </Layout>

//   </>
//   )
// }


// export const Option04 =()=> {
//   return(
//   <>
//     <Header/>
//     <Layout>
//     <div className="center">
//         <div className="question">
//           04.<br/>
//           <br/>
//           성별과 연령대를 알려주세요
//         </div>
//     </div>

//     <div>
//       <button className="gender">여성</button>
//       <button className="gender">남성</button>
//     </div>

//     <div style={{margin:"50px"}}>
//       <div>
//         <button className="age">10대</button>
//         <button className="age">20대</button>
//         <button className="age">30대</button>
//       </div>
//       <div>
//         <button className="age">40대</button>
//         <button className="age">50대</button>
//         <button className="age">60대+</button>
//       </div>
//     </div>

//       <button className="button">다음으로</button>
//     </Layout>

//   </>
//   )
// }

// export const Option05 =()=> {
//   return(
//   <>
//     <Header />
//     <Layout>
//       <div className="center">
//         <div className="question">
//           05.<br/>
//           <br/>
//           누구와 함께 하시나요?
//         </div>
//        </div>

//       <div style={{margin:"25px auto 0px"}}>
//         <button className="with">솔로</button>
//         <button className="with">친구</button>
//       </div>
      
//       <div style={{margin:"0px auto 120px"}}>
//         <button className="with">연인</button>
//         <button className="with">가족</button>
//       </div>

//       <button className="button"
//       onClick={Option06_0}>다음으로</button>
//     </Layout>

//   </>
//   )
// }
// export const Option06_0 =()=> {
//   return(
//   <>
//     <Header />
//     <Layout>
//       <div className="center">
//         <div className="question">
//           06.<br/>
//           <br/>
//           여행지는 결정 되셨나요?
//         </div>
//        </div>
//       <div className="answerbox">
//         <button className="answer">네! 결정했어요.</button>
//         <button className="answer">아니요. 결정하지 못했어요.</button>
//       </div>
//       <button className="button">다음으로</button>
//     </Layout>
//   </>
//   )
// }

// export const Option06_1 =()=> {
 
//   return(
//     <>
//       <Header />
//       <Layout>
//         <div className="center">
//           <div className="question">
//             07.<br/>
//             <br/>
//             결정된 여행지를 지도에서 선택해 주세요
//           </div>
//         </div>
  
//         <div className="center">
//           <div className="calendar">지도</div>
//           <button className="button">다음으로</button>  
//         </div>  
//       </Layout>
  
//     </>
//     )
//   }

//   export const Option06_2 =()=> {
 
//     return(
//       <>
//         <Header />
//         <Layout>
//           <div className="center">
//             <div className="question">
//               07.<br/>
//               <br/>
//               관심있는 지역을 지도에서 선택해 주세요
//             </div>
//           </div>
    
//           <div className="center">
//             <div className="calendar">지도</div>
//             <button className="answer">추천해주세요</button>
//             <button className="button">다음으로</button>  
//           </div>  
//         </Layout>
    
//       </>
//       )
//     }

//     export const Option07 =()=> {
 
//       return(
//         <>
//           <Header />
//           <Layout>
//             <div className="center">
//               <div className="question">
//                 08.<br/>
//                 <br/>
//                 여행 취향을 알려주세요!
//               </div>
//             </div>

            

      
//             <div className="center">
//               <div className="calendar">지도</div>
//               <button className="button">다음으로</button>  
//             </div>  
//           </Layout>
      
//         </>
//         )
//       }

