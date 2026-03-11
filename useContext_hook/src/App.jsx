import React, { useState, createContext } from "react";
import ChildA from "./ChildA";

const UserContext = createContext();

const App = () => {

  const [user, setUser] = useState({ name: "Sachin_diwakar" });

  return (
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
  );
};

export default App;
export { UserContext };