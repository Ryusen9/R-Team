import { Github, Pencil, PlusIcon, Slack, Webhook } from "lucide-react";

const Integration = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-3">
        <div className="flex items-center justify-between w-full text-sm md:text-base">
          <p className="text-zinc-500">
            Integrations: <span className="text-zinc-300">3</span>
          </p>
          <div className="text-sm">
            <span className="text-zinc-600">
              <Pencil size={"20px"} />
            </span>
          </div>
        </div>
        <div className="w-full py-4 px-5 backdrop-blur-md bg-zinc-600/30 rounded-2xl">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 text-sm md:text-base text-zinc-200 font-medium cursor-pointer">
              <div className="bg-zinc-500 rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center text-zinc-300">
                <Slack className="w-4 md:w-full" />
              </div>{" "}
              Slack
            </li>
            <li className="flex items-center gap-3 text-sm md:text-base text-zinc-200 font-medium cursor-pointer">
              {" "}
              <div className="bg-zinc-500 rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center text-zinc-300">
                <Github className="w-4 md:w-full" />
              </div>
              Github
            </li>
            <li className="flex items-center gap-3 text-sm md:text-base text-zinc-200 font-medium cursor-pointer">
              {" "}
              <div className="bg-zinc-500 rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center text-zinc-300">
                <Webhook className="w-4 md:w-full" />
              </div>
              Intercom
            </li>
            <li className="flex items-center gap-3 text-sm md:text-base text-zinc-200 font-medium cursor-pointer">
              <div className="bg-zinc-500 rounded-full w-6 md:w-10 h-6 md:h-10 flex items-center justify-center text-zinc-300">
                <PlusIcon className="w-6 md:w-full" />
              </div>
              Add a new Plug-in
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Integration;
