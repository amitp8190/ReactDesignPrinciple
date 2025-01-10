//import { useUser } from "./user.hook";
import {useCurrentUser} from '../component/current-user.hook'

export const UserInfo = ({userId}) => {
  const user = useCurrentUser();
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {JSON.stringify(book)} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
