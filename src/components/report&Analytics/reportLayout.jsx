import { DashBoardLayout } from "../global/dashboardLayout"

export const ReportLayout =({
    title,
    children
})=>{
    return(
        <DashBoardLayout>
        <div>
            <nav className="bg-grey-light w-full rounded-md">
                <ol className="list-reset flex mb-4">
                    <li>
                    <a
                        href="#"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >Dashboard</a
                    >
                    </li>
                    <li>
                    <span className="mx-2 text-neutral-500 dark:text-neutral-400 text-primary">/</span>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >Report And Analytics</a
                    >
                    </li>
                    <li>
                    <span className="mx-2 text-neutral-500 dark:text-neutral-400 text-primary">/</span>
                    </li>
                    <li className="text-neutral-500 dark:text-neutral-400">{title}</li>
                </ol>
            </nav>
            <div className="w-full bg-white p-4">
                {children}
            </div>
        </div>
        </DashBoardLayout>
    )
}