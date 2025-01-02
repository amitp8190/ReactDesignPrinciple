import { Modal } from "./Modal";
import { LargeBookListItem } from "../List/books/LargeListItems";
import { books } from "../List/data/books";

function ModalView() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default ModalView;
