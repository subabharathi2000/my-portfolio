import HeroImg from "../assets/hero.png"
import { FaTwitter, FaFacebook , FaLinkedin ,FaGithub  } from "react-icons/fa6";

function Hero() {
    return (
        <section className="flex flex-col gap-10 md:flex-row items-center justify-center px-38 py-32 bg-secondary">
            <div className="md:w-1/2 flex flex-col gap-4">
                <h1 className="font-bold text-4xl md:text-5xl text-white">Hi, Im <br/><span className="text-silver  font-style  font-bold font-big">Suba Bharathi</span> 
                <p className="text-sm md:text-xl text-white ">Full-stack Developer | Web Development Enthusiast </p>
                </h1>
                <div className="flex gap-5 text-white">
                    <a href=""> <FaTwitter/> </a>
                    <a href=""> <FaFacebook/> </a>
                    <a href=""> <FaLinkedin/> </a>
                    <a href=""> <FaGithub/> </a>
                </div>
            </div>
            <img className="px-8 md:w-1/4 md:p-0 " src={HeroImg} alt="" />
        </section>
    )
}

export default Hero