import Project1 from "../assets/project1.jpeg"
import Project2 from "../assets/project2.jpeg"
import Project3 from "../assets/project3.jpeg"
import Project4 from "../assets/project4.jpeg"
import Project5 from "../assets/project5.jpeg"
import Project6 from "../assets/project6.jpeg"

function Projects() {
    return (
        <section id="project" className="bg-secondary text-white flex flex-col  pb-14">
            <div className="flex flex-col">
                <h1 className="w-[125px] ml-8 md:ml-28 mt-10 border-b-4 border-white-900 md:text-left font-bold text-3xl md:pt-14">Projects</h1>
                <p className=" ml-8 md:ml-28 md:p-0 mt-3 ">These are some of my best projects. I have built these with React, HTML, JavaScript, Tailwind CSS and CSS. Check them out.</p>
            </div>
            <div className="p-0">
                <div className=" pl-12 md:pl-28 pt-10 flex flex-wrap gap-10 md:gap-20 w-full">
                    <div className="relative cursor-pointer group">
                        <img
                            className="h-[120px] w-[150px] md:h-[200px] md:w-[300px] rounded-md"
                            src={Project1}
                            alt="Greenden Project"
                        />
                        <div className="absolute hidden group-hover:block bg-transparentbg text-xs md:text-lg top-0 bottom-0 left-0 right-0 p-2 ">
                            <p>Greenden Website. Built with HTML and Tailwind CSS</p>
                            <a className="underline" href="https://subabharathi2000.github.io/Greenden/">View Project</a>
                        </div>
                    </div>

                    <div className="relative cursor-pointer group">
                        <img
                            className="h-[120px] w-[150px] md:h-[200px] md:w-[300px] rounded-md"
                            src={Project2}
                            alt="Greenden Project"
                        />
                        <div className="absolute hidden group-hover:block bg-transparentbg text-xs md:text-lg top-0 bottom-0 left-0 right-0 p-2 ">
                            <p>Trip Adviser Clone. Built with HTML and CSS</p>
                            <a className="underline" href="https://subabharathi2000.github.io/trip-adviser/">View Project</a>
                        </div>
                    </div>
                    <div className="relative cursor-pointer group">
                        <img
                            className="h-[120px] w-[150px] md:h-[200px] md:w-[300px] rounded-md"
                            src={Project3}
                            alt="Greenden Project"
                        />
                        <div className="absolute hidden group-hover:block bg-transparentbg text-xs md:text-lg top-0 bottom-0 left-0 right-0 p-2 ">
                            <p>Udemy Clone Website. Built with HTML and CSS</p>
                            <a className="underline" href="https://subabharathi2000.github.io/udemy_clone/">View Project</a>
                        </div>
                    </div>
                    <div className="relative cursor-pointer group">
                        <img
                            className="h-[120px] w-[150px] md:h-[200px] md:w-[300px] rounded-md"
                            src={Project4}
                            alt="Greenden Project"
                        />
                        <div className="absolute hidden group-hover:block bg-transparentbg text-xs md:text-lg top-0 bottom-0 left-0 right-0 p-2 ">
                            <p>Act to do. Built with React and Tailwind CSS</p>
                            <a className="underline" href="https://actodo-navy-iota.vercel.app/">View Project</a>
                        </div>
                    </div>
                    <div className="relative cursor-pointer group">
                        <img
                            className="h-[120px] w-[150px] md:h-[200px] md:w-[300px] rounded-md"
                            src={Project5}
                            alt="Greenden Project"
                        />
                        <div className="absolute hidden group-hover:block bg-transparentbg text-xs md:text-lg top-0 bottom-0 left-0 right-0 p-2 ">
                            <p>Nostra Ecommerce Website. Built with HTML, CSS and JavaScrpipt</p>
                            <a className="underline" href="https://subabharathi2000.github.io/Nostra/">View Project</a>
                        </div>
                    </div>
                    <div className="relative cursor-pointer group">
                        <img
                            className="h-[120px] w-[150px] md:h-[200px] md:w-[300px] rounded-md"
                            src={Project6}
                            alt="Greenden Project"
                        />
                        <div className="absolute hidden group-hover:block bg-transparentbg text-xs md:text-lg top-0 bottom-0 left-0 right-0 p-2 ">
                            <p>A Dashboard. Built with React.js and Tailwind CSS </p>
                            <a className="underline" href="https://dashboard-smoky-xi.vercel.app/">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects