import { ReactNode } from "react";

import "./index.scss";

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighLighted?: boolean;
  isAnswered?: boolean;
}

function classNames(
  ...params: Array<string | Record<string, boolean>>
): string {
  const arrayClass: Array<string> = [];

  params.forEach(currentClass => {
    if (typeof currentClass === "string") {
      arrayClass.push(currentClass as string);
    } else {
      const [key, value] = Object.entries(currentClass  as Record<string, boolean>)[0];

      if (value) {
        arrayClass.push(key);
      }
    }
  });

  return arrayClass.join(" ");
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighLighted = false,
  children,
}: QuestionProps) {
  return (
    <div
      className={classNames(
        "question",
        { answered: isAnswered },
        { highLighted: isHighLighted && !isAnswered }
      )}
    >
      <p>{content}</p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
