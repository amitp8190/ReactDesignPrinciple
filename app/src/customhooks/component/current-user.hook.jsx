import { useEffect, useState } from "react";
import {userList} from '../component/data'
//import axios from "axios";
export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      //const response = await axios.get("/current-user");
      console.log(userList)
      setUser(userList);
    })();
  }, []);

  return user;
};
