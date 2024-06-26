import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: {}, setUserData: () => {} });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState({"skills": []});

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export default function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
