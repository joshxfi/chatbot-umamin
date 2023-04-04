import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { Chat } from "./components/Chat";

const App = () => {
  const [message, setMessage] = useState("");

  return (
    <section className="grid place-items-center w-[90%] mx-auto min-h-screen">
      <div className="border-secondary-100 bg-secondary-200 w-full overflow-hidden rounded-3xl border-2 md:w-[720px]">
        {/* Top */}
        <div className="bg-secondary-300 border-secondary-100 flex items-center justify-between border-b-2 px-7 py-4">
          <p className="font-light text-sm text-gray-400">
            gpt-3.5-turbo
          </p>

          <h3 className="font-syne font-extrabold text-primary-200 text-center text-lg">
            umamin
          </h3>
        </div>

        {/* Message */}
        <div className="flex min-h-[170px] flex-col justify-between space-y-5 px-5 pt-10 sm:space-y-0 sm:px-7 md:mb-4">
          <Chat type="receiver" content="hello" />

          <Chat type="sender" content="test" />
        </div>

        {/* Send Message */}
        <form className="bg-secondary-200 items-center py-5 px-4 h-[85px] mt-4 md:px-7">
          <div className="flex rounded-full items-center text-white bg-secondary-100 px-6 py-3">
            <input
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
