import { CurrentUserLoader } from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";

export default function ContainerExample() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

