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
        <div className="h-full">
            <div className="mobileNav">
                <Nav/>
            </div>
            <div className="h-full w-full">
                <DashBoardTopNav/>
                <div 
                    style={{height:"87%"}} 
                    className="flex bg-cl w-full"
                >
                    <div className="h-full pt-8">
                        <Nav 
                            style=" bg-white z-[1035] relative  desktopNav w-60 overflow-hidden dark:bg-zinc-800"/>
                    </div>
                    <div
                        className="w-full h-full overflow-auto">
                            <div className="h-[100%] w-full overflow-auto lg:p-8 xl:p-8 md:p-8 sm:p-8 xs:p-4 xxs:p-4 xxxs:p-4 pb-0">
                                {children}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}