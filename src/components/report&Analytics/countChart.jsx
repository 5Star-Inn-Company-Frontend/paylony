import { useState,useEffect } from "react"
import { BarChart } from "../global/barchat"
import { Text } from "../global/text"
import {
    Tab,
    initTE,
  } from "tw-elements";

export const CountChart =()=>{
    useEffect(()=>{
        initTE({ Tab });
    })
    const mothlydata=[
        {
            name:"Cash Out",
            number:50
        },{
            name:"Transfer",
            number:20
        },{
            name:"Total",
            number:10
        }
    ]
    const weeklydata=[
        {
            name:"Cash Out",
            number:40
        },{
            name:"Transfer",
            number:80
        },{
            name:"Total",
            number:100
        }
    ]
    const dailydata=[
        {
            name:"Cash Out",
            number:87
        },{
            name:"Transfer",
            number:90
        },{
            name:"Total",
            number:50
        }
    ]
    const [
        TransactData
    ] = useState({
        labels:mothlydata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"monthly transaction count",
            borderColor: '#854FFF',
            backgroundColor: ['#854FFF',"#CA22EF","#4B9EFF"],
            data:mothlydata?.map(
                (data)=>data.number
            )
        }]
    });

    const [
        WeeklyTransactData
    ] = useState({
        labels:weeklydata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"monthly transaction count",
            borderColor: '#854FFF',
            backgroundColor: ['#854FFF',"#CA22EF","#4B9EFF"],
            data:weeklydata?.map(
                (data)=>data.number
            )
        }]
    });


    const [
        DailyTransactData
    ] = useState({
        labels:dailydata?.map(
            (data)=>data.name
        ),
        datasets:[{
            label:"monthly transaction count",
            borderColor: '#854FFF',
            backgroundColor: ['#854FFF',"#CA22EF","#4B9EFF"],
            data:dailydata?.map(
                (data)=>data.number
            )
        }]
    });

    return(
        <div className="py-4">
            <ul
                className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
                id="pills-tab"
                role="tablist"
                data-te-nav-ref
            >
                <li role="presentation">
                    <a
                    href="#pills-home"
                    className="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                    id="pills-home-tab"
                    data-te-toggle="pill"
                    data-te-target="#pills-home"
                    data-te-nav-active
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >Monthly</a
                    >
                </li>
                <li role="presentation">
                    <a
                    href="#pills-profile"
                    className="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                    id="pills-profile-tab"
                    data-te-toggle="pill"
                    data-te-target="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    >Weekly</a
                    >
                </li>
                <li role="presentation">
                    <a
                    href="#pills-contact"
                    className="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                    id="pills-contact-tab"
                    data-te-toggle="pill"
                    data-te-target="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >Daily</a
                    >
                </li>
            </ul>
            <div className="mb-6">
                <div
                    className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    data-te-tab-active
                >
                    <Text
                        style="text-xl mb-4 font-semibold text-start"
                        value="Monthly Transaction Count"
                    />
                    <div className="bar-container">
                        <BarChart data={TransactData}/>
                    </div>
                </div>
                <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    <Text
                        style="text-xl mb-4 font-semibold text-start"
                        value="Weekly Transaction Count"
                    />
                    <div className="bar-container">
                        <BarChart data={WeeklyTransactData}/>
                    </div>
                </div>
                <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                >
                    <Text
                        style="text-xl mb-4 font-semibold text-start"
                        value="Daily Transaction Count"
                    />
                    <div className="bar-container">
                        <BarChart data={DailyTransactData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}