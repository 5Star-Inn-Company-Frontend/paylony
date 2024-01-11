import { useEffect} from "react";
import {
    Sidenav,
    Ripple,
    Tab,
    initTE,
  } from "tw-elements";
import { DashBoardTopNav } from "./dashboardTopNav";
import { Nav } from "./nav";

export const DashBoardLayout =({children})=>{
    useEffect(() => {
        initTE({ Sidenav, Ripple,Tab });
    });
    return(
        <div>
            <Nav/>
            <div className="h-screen bg-light-pink text-center w-full">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-fixed text-center">
                    <DashBoardTopNav/>
                    <div className="flex bg-cl">
                        <div>
                            <Nav 
                                style="mt-8 fixed bg-white left-0 top-0 z-[1035] relative  desktopNav h-screen w-60 overflow-hidden dark:bg-zinc-800"/>
                        </div>
                        <div className="w-full lg:p-8 xl:p-8 md:p-8 sm:p-8 xs:p-4 xxs:p-4 xxxs:p-4 h-screen overflow-auto pb-0">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}