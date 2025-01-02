import { RegularList } from "../lists/Regular";
import { authors } from "../data/authors";
import { SmallAuthorListItem } from "../authors/SmallListItems";
import { LargeAuthorListItem } from "../authors/LargeListItems";

export default function ListScreen() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={book}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
}
