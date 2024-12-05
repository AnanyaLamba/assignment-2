import React, { createContext, useState } from "react";
import { jobDescription } from "../../Data/data";

export const JobContext = createContext();

export const JobContextProvider = ({ children }) => {
  const [jobList, setJobList] = useState(jobDescription);

  return (
    <JobContext.Provider value={{ jobList }}>
      {children}
    </JobContext.Provider>
  );
};


export default JobContext ;