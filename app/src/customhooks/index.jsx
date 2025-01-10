import { UserInfo } from "./component/user-info";

function CustomHook() {
  return (
    <>
      <UserInfo userId={"1"}/>
      <UserInfo userId={"2"}/>
      <UserInfo userId={"3"}/>
    </>
  );
}

export default CustomHook;
