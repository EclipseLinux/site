import { IconDownload } from "@tabler/icons-react";
import { Button } from "../ui/button";

export default function Hero() {
    return <div className="w-full h-screen flex flex-col md:flex-row justify-between">
        <div className="h-full w-full flex flex-col justify-center items-center gap-4">
            <div>
                <span className="text-4xl font-medium">
                    { /* A system built by you, <br />for you */}
                </span>
            </div>
            <div className="flex flex-row gap-4">
                {
                    /*
                     <button
                    className="cursor-pointer rounded-full bg-linear-to-b from-orange-500 to-orange-700 px-4 py-2 font-medium text-white ring-1 ring-white/20 ring-offset-1 ring-offset-orange-500 transition-transform duration-150 ring-inset active:scale-98 active:translate-y-0.5 flex gap-2 items-center">
                    <IconDownload size={20} />
                    Download
                </button>

                <Button className={"px-4"}>Hi</Button>
                    */
                }
            </div>
        </div>

        <div className="h-full w-full">

        </div>
    </div>;
}