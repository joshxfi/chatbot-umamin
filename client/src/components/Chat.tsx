type ChatProps = {
  type: "user" | "bot";
  content: React.ReactNode;
};

export const Chat = ({ type, content }: ChatProps) => {
  return (
    <div
      className={`${
        type === "user"
          ? "after:bg-secondary-200 self-end bg-primary-200 before:bg-primary-200 chat-p send"
          : "after:bg-secondary-200 bg-secondary-100 before:bg-secondary-100 self-start chat-p receive"
      } inline-block max-w-[300px] px-5 py-4 text-base text-white`}
    >
      {content}
    </div>
  );
};
