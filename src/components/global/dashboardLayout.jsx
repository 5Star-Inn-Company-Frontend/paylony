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
            <div className="h-full w-full">
                <DashBoardTopNav/>
                <div className="flex bg-cl">
                    <div>
                        <Nav 
                            style="mt-8 bg-white z-[1035] relative  desktopNav h-[100%] w-60 overflow-hidden dark:bg-zinc-800"/>
                    </div>
                    <div className="w-full lg:p-8 xl:p-8 md:p-8 sm:p-8 xs:p-4 xxs:p-4 xxxs:p-4 h-[100%] overflow-auto pb-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}