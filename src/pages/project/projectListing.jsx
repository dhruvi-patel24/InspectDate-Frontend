import React, { useEffect } from "react";

export default function projectListing() {
  useEffect(() => {
    console.log("BASE URL:", import.meta.env.VITE_API_BASE_URL);
  }, []);

  return(
  <>
    <div className='row col-12'>
      hello
    </div>
  </>
)}