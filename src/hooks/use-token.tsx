import { useState } from "react";
const useToken = () => {
  const [isToken, setIsToken] = useState<string>("");

  return { isToken, setIsToken };
};

export default useToken;
