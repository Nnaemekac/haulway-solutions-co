import { GameIconsGrowth, LogosGitIcon, LogosTapCartIcon, SimpleIconsIcon, StreamLineAiTechnologySpark } from "../icons";

const Header = () => {
    const initialData = [
        {
          icon: <StreamLineAiTechnologySpark />,
          heading: "Innovative Solutions",
          paragraph: "Delivering advanced tools and strategies for business growth.",
          animationDelay: '300'
        },
        {
          icon: <SimpleIconsIcon />,
          heading: "Industry Expertise",
          paragraph: "A team of specialists committed to driving success.",
          animationDelay: '500'
        },
        {
          icon: <LogosTapCartIcon />,
          heading: "Tailored Services",
          paragraph: "Customized solutions to meet unique business needs.",
          animationDelay: '700'
        },
        {
          icon: <LogosGitIcon />,
          heading: "Operational Efficiency",
          paragraph: "Streamlining processes for maximum productivity.",
          animationDelay: '900'
        },
        {
          icon: <GameIconsGrowth />,
          heading: "Sustainable Growth",
          paragraph: "Fostering long-term success across diverse sectors.",
          animationDelay: '1100'
        },
    ];
    return (
        <>
            <div className='flex flex-wrap'>
                <div data-aos="fade-right" data-aos-duration="1000" className='lg:basis-6/12 basis-full'>
                    <h1 className='lg:text-[200%] text-[180%] font-normal leading-[3rem] lg:block hidden'>Driving growth through innovative <br/> solutions and expert insights for business operation optimization</h1>
                    <h1 className='lg:text-[200%] text-[180%] font-normal leading-[3rem] lg:hidden block'>Driving growth <br/> through innovative solutions and expert insights for business operation optimization</h1>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" className='lg:basis-6/12 basis-full lg:pl-[2rem] pl-[0] lg:mt-[0] mt-[1rem]'>
                    <p className='text-[95%] leading-[1.5rem] lg:w-[80%] ml-auto opacity-[.8] w-full'>Grascope Industries. Ltd utilizes advanced innovation and specialized expertise to deliver tailored solutions that improve operational efficiency, foster sustainable growth, and empower businesses across various sectors.</p>
                </div>
            </div>
            <div className='py-[2rem]'>
                <img data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className='w-full h-full rounded-[1rem] sticky' src={'/static/about/about-image.jpg'} alt="" />
            </div>
            <div className='grid lg:grid-cols-5 grid-cols-1 gap-1'>
                {initialData.map((data, index) => (
                    <div data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay={data.animationDelay} key={index} className="flex mt-[1rem]">
                        <span className='w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center'>{data.icon}</span>
                        <div className={`pl-[.5rem] w-[calc(100%-40px)]`}>
                            <h3 className='font-normal text-[100%]'>{data.heading}</h3>
                            <p className='lg:text-[80%] leading-[1.5rem] opacity-[.8] mt-[.5rem]'>{data.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Header;