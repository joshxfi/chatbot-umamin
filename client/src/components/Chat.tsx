interface Props {
  type: "user" | "bot";
  content: string;
}

export const Chat = ({ type, content }: Props) => {
  return (
    <p
      className={`${
        type === "user"
          ? "after:bg-secondary-200 self-end bg-primary-200 before:bg-primary-200 chat-p send"
          : "after:bg-secondary-200 bg-secondary-100 before:bg-secondary-100 self-start chat-p receive"
      } inline-block max-w-[255px] px-5 py-4 text-base text-white`}
    >
      {content}
    </p>
  );
};
