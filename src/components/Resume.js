import ResumeImg from "../assets/resume.jpg"
import MyPDF from "../Subabharathi.pdf"

function Resume() {
    return (
        <section id="resume" className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-end">
                <img src={ResumeImg} className="w-[300px]  " alt="" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h1 className="w-[150px] border-b-4 border-gray-900 md:text-left font-bold text-3xl md:pt-20">Resume</h1>
                <p className="w-full pt-5 text-justify md:text-left md:pt-5">You Can View my Resume{"   "}
                    <a href={MyPDF} className="btn"> Download</a></p>
            </div>
        </section>
    )
}

export default Resume