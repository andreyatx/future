import { FC } from "react";
import styles from "./Book.module.css";
import bookIcon from "../../assets/BookIcon.svg";
import { Link } from "react-router-dom";

type VolumeInfo = {
  title: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  categories: string[];
  authors: string[];
  description?: string;
};
export type BookProps = {
  id: string;
  volumeInfo: VolumeInfo;
};

export const Book: FC<BookProps> = ({
  id,
  volumeInfo: { title, categories, authors, imageLinks },
}) => {
  return (
    <Link className={styles.bookWrapper} to={`/book/${id}`}>
      <div className={styles.book}>
        {imageLinks ? (
          <img
            src={imageLinks.thumbnail}
            alt="book thumbnail"
            className={styles.thumbnail}
          />
        ) : (
          <img
            src={bookIcon}
            alt="book thumbnail"
            className={styles.thumbnail}
          />
        )}

        {categories ? (
          <span className={styles.category}>{categories[0]}</span>
        ) : null}

        <span className={styles.title}>{title ? title : "no title"}</span>

        {authors ? (
          <div>
            {authors.map((author) => {
              return <span key={author}>{author}</span>;
            })}
          </div>
        ) : null}
      </div>
    </Link>
  );
};
