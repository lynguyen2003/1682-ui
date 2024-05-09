import { LogoLight, LogoDark } from '~/components/Logo';
import useDarkMode from '~/utilities/useDarkMode';

const Nav = () => {
    const { theme, toggleDarkMode } = useDarkMode();

    return (
        <nav className="fixed w-[100%] dark:bg-[#121212] bg-slate-50 flex justify-between items-center pl-4 pr-6 shadow-sm shadow-[#0000001f] z-99">
            <div className="w-[300px]">
                <a className="" href="/" rel="noopener noreferrer">
                    {theme === 'light' ? <LogoDark /> : <LogoLight />}
                </a>
            </div>
            <div className="group w-[500px] ">
                <form className="flex items-center dark:bg-[#ffffff1f] bg-[#1618230f] px-4 py-3 h-[46px] rounded-[92px] hover:border group-hover:border-gray-400 border-transparent">
                    <input
                        type="text"
                        className="placeholder:text-base placeholder:dark:text-slate-50 bg-transparent focus:outline-none w-full placeholder:text-gray-600 "
                        placeholder="Tìm kiếm"
                    />
                    <span className="h-7 w-[0.5px] my-[-3px] bg-[#ffffff1f] "></span>
                    <button
                        type="submit"
                        className="block pl-3 py-[10px] pr-[16px] -mr-[16px] -my-[11px] group-hover:bg-gray-400 group-hover:border-y group-hover:border-r group-hover:border-gray-400 border-transparent group-hover:rounded-r-[92px]"
                    >
                        <div>
                            <svg
                                width="24"
                                data-e2e=""
                                height="24"
                                viewBox="0 0 48 48"
                                fill="rgba(22, 24, 35, .34)"
                                className="group-hover:fill-[rgba(22,24,35,1)] dark:fill-[rgba(255,255,255,.34)] group-hover:bg-gray-400 "
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </form>
            </div>
            <div className="flex relative h-9">
                <div className=" flex group dark:bg-[#ffffff14] dark:text-white dark:border-none dark:hover:bg-[#3a3a3a] bg-white text-black items-center border font-bold py-2 px-4 rounded hover:bg-[#f8f8f8] hover:cursor-pointer">
                    <svg
                        className="w-5 h-5 mr-2 "
                        width="1em"
                        data-e2e=""
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                        ></path>
                    </svg>
                    <span className="font-semibold, leading-6">Tải lên</span>
                </div>
                <button className="bg-[#fe2c55] hover:bg-[#ea284e] text-white leading-5 font-bold py-2 px-4 ml-4 rounded">
                    Đăng nhập
                </button>

                <div className="dropdown dropdown-hover dark:text-white text-black  ml-4 m-auto">
                    <i tabIndex={0} className="hover:cursor-pointer not-italic ">
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"
                            ></path>
                        </svg>

                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] dark:bg-[#121212] bg-slate-50 shadow menu rounded-box w-72 -left-64 top-8 pr-0 pl-0"
                        >
                            <li>
                                <div className="flex ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                                        />
                                    </svg>
                                    <p>Trung tâm nhà sáng tạo LIVE</p>
                                </div>
                            </li>

                            <li>
                                <div className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                                        />
                                    </svg>
                                    <p>Tiếng Việt</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                                        />
                                    </svg>
                                    <p>Phản hồi & Trợ giúp</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                        />
                                    </svg>

                                    <p>Chế độ tối</p>
                                    <input
                                        type="checkbox"
                                        value="synthwave"
                                        className="toggle theme-controller"
                                        onChange={toggleDarkMode}
                                    />
                                </div>
                            </li>
                        </ul>
                    </i>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
