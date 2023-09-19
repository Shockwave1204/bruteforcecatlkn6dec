import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Ache = () => {
 const [user, setUser] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const curRef = useRef(null);
 const [isCurVisible, setIsCurVisible] = useState(false);

 // Define the API endpoint URL
 const apiUrl = 'https://codeforces.com/api/user.status?handle=reyes12'; // Replace with your API URL

 useEffect(() => {
  // Make a GET request
  axios
   .get(apiUrl)
   .then((response) => {
    if (response.data.status === 'OK') {
     const submissions = response.data.result;
     const solvedProblems = new Set();
     // Iterate through the submissions and add solved problems to the set
     for (const submission of submissions) {
      if (submission.verdict === 'OK') {
       const problemId = submission.problem.contestId + submission.problem.index;
       solvedProblems.add(problemId);
      }
     }

     const solvedProblemsCount = solvedProblems.size;
     setUser(solvedProblemsCount);

     setIsLoading(false); // Mark loading as completed
    }
   })
   .catch((error) => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
    setIsLoading(false); // Mark loading as completed, even in case of an error
   });
 }, []);

 const [avatar, setAvatar] = useState([]);
 const [rating, setRating] = useState([]);
 const [rank, setRank] = useState([]);
 const [org, setOrg] = useState([]);
 const [max, setMax] = useState([]);
 const [maxRank, setMaxRank] = useState([]);
 const [cont, setCont] = useState([]);

 const apiAv = `https://codeforces.com/api/user.info?handles=reyes12`;

 useEffect(() => {
  // Make a GET request
  axios
   .get(apiAv)
   .then((response) => {
    if (response.data.status === 'OK') {
     const submissions = response.data.result.avatar;
     setAvatar(response.data.result[0].avatar);
     setRating(response.data.result[0].rating);
     setRank(response.data.result[0].rank);
     setOrg(response.data.result[0].organization);
     setMax(response.data.result[0].maxRating);
     setCont(response.data.result[0].contribution);
     setMaxRank(response.data.result[0].maxRank);
     setIsLoading(false); // Mark loading as completed
    }
   })
   .catch((error) => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
    setIsLoading(false); // Mark loading as completed, even in case of an error
   });
 }, []);

 return (
  <div className="  max-w-[1440px] mx-auto mt-[200px] p-4 md:p-8" id='cptracker'>
   <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-5 mb-10">
    CP & Problem Solving Stat Tracker
   </h1>

   <div>
    <h1 className="text-xl md:text-2xl lg:text-3xl text-center text-blue-200 mt-5 mb-5">Codeforces_</h1>

    {isLoading ? (
     <p className="text-center">Loading...</p> // Display a loading message while fetching data
    ) : (
     <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center mb-[200px]">

       <div className="border p-4 rounded-lg bg-blue-500/20 backdrop-blur-sm">
        <div className="flex items-center justify-between">
         <div className="text-primary">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 stroke-current text-green-500"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
           />
          </svg>
         </div>
         <div className="text-primary text-xl md:text-2xl lg:text-3xl">Total Solved</div>
        </div>
        <div className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold mt-2">{user}</div>
        <div className="flex items-center mt-2">
         <p className="text-white">Contribution:</p>
         <p className={`stat-desc ${cont < 0 ? 'text-red-500 font-bold' : 'text-green-500 font-bold'}`}>
          {cont}
         </p>
        </div>
       </div>





       <div className="border p-4 rounded-lg bg-blue-500/20 backdrop-blur-sm">
        <div className="flex items-center justify-between">
         <div className="text-secondary">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 stroke-current text-yellow-500"
          >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
           />
          </svg>
         </div>
         <div className="text-white text-xl md:text-2xl lg:text-3xl">Max Rating</div>
        </div>
        <div className="text-red-500 text-2xl md:text-3xl lg:text-4xl font-bold mt-2">{max}</div>
        <div className="text-white text-lg md:text-xl lg:text-2xl">
         Max Rank: <span className="font-bold text-blue-500">{maxRank}</span>
        </div>
       </div>

       <div className="border p-4 rounded-lg bg-blue-500/20 backdrop-blur-sm ">
        <div className="flex items-center justify-between">
         <div className="text-white text-xl md:text-2xl lg:text-3xl">Current Rating</div>

         <div className="avatar">
          <div className="  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
           
           <img
            style={{
             width: '50px',
             height: '50px'
            }}
            src={avatar} alt="Avatar" className="   w-full h-full rounded-full" />
          </div>
         </div>
        </div>
        
        <div className="text-blue-300 text-2xl md:text-3xl lg:text-4xl font-bold mt-2">{rating}</div>
        <div className="text-gray-100 text-lg md:text-xl lg:text-2xl">{org}</div>
       </div>
      </div>
     </>
    )}
   </div>
  </div>
 );
};

export default Ache;
