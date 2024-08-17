import AboutImg from "../assets/about.png"

function About() {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
                <img src={AboutImg} className=" " alt="" />
            </div>
            <div className="p-8 md:w-1/2">
                <h1  className="w-[150px] border-b-4 border-gray-900 md:text-left font-bold text-3xl md:pt-20">About Me</h1>
                <p className="w-full pt-5 text-justify md:text-left md:pt-5">An Experienced Full Stack Developer with a strong background in building dynamic and responsive web applications using HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. Demonstrated proficiency in designing and developing efficient front-end and back-end solutions, implementing RESTful APIs, and effectively managing databases. Adept at collaborating in agile environments, 
                    with a commitment to delivering high-quality code and exceptional user experiences.</p>
            </div>
        </section>
    )
}

export default About