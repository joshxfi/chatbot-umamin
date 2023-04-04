import { useState, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { RiSendPlaneFill } from "react-icons/ri";
import { Chat } from "./components/Chat";

interface ChatLog {
  type: "user" | "bot";
  message: React.ReactNode;
}

const GET_RESPONSE = gql`
  mutation GetResponse($prompt: String!) {
    getResponse(prompt: $prompt) {
      response
    }
  }
`;

const App = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState("");
  const [chatLog, setChatLog] = useState<ChatLog[]>([
    {
      type: "user",
      message: "Hello!",
    },
    {
      type: "bot",
      message: "Hi! How are you?",
    },
  ]);

  const [getResponse] = useMutation(GET_RESPONSE);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (chatLog[chatLog.length - 1].type === "user") {
      return;
    }

    setChatLog([
      ...chatLog,
      {
        type: "user",
        message: prompt,
      },
      {
        type: "bot",
        message: (
          <div className="px-6 py-1">
            <div className="dot-flashing"></div>
          </div>
        ),
      },
    ]);

    getResponse({
      variables: { prompt },
      onCompleted: (data) => {
        setChatLog([
          ...chatLog,
          {
            type: "user",
            message: prompt,
          },
          {
            type: "bot",
            message: data.getResponse.response,
          },
        ]);

        setTimeout(() => {
          chatRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      },
    });

    setTimeout(() => {
      chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
    setPrompt("");
  };

  return (
    <section className="grid place-items-center w-[90%] mx-auto min-h-screen">
      <div className="border-secondary-100 bg-secondary-200 w-full overflow-hidden rounded-3xl border-2 md:w-[720px]">
        {/* Top */}
        <div className="bg-secondary-300 border-secondary-100 flex items-center justify-between border-b-2 px-7 py-4">
          <p className="font-light text-sm text-gray-400">gpt-3.5-turbo</p>

          <h3 className="font-syne font-extrabold text-primary-200 text-center text-lg">
            umamin
          </h3>
        </div>

        {/* Message */}
        <div className="flex min-h-[170px] max-h-[400px] overflow-y-scroll flex-col justify-between space-y-5 px-5 pt-10 sm:space-y-0 sm:px-7 md:mb-4">
          {chatLog.map((c) => (
            <Chat type={c.type} content={c.message} />
          ))}
          <div ref={chatRef}></div>
        </div>

        {/* Send Message */}
        <form
          onSubmit={handleSubmit}
          className="bg-secondary-200 border-t-2 border-secondary-100 items-center py-5 px-4 h-[85px] mt-4 md:px-7"
        >
          <div className="flex rounded-full items-center text-white bg-secondary-100 px-6 py-3">
            <input
              required
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              minLength={2}
              maxLength={200}
              type="text"
              placeholder="Send a message..."
              className="bg-secondary-100 w-full outline-none"
            />

            <button
              type="submit"
              className="text-primary-100 cursor-pointer flex-none text-2xl"
            >
              <RiSendPlaneFill />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default App;
