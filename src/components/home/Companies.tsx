const Companies = () => {
    return (
        <section className='py-[3rem]'>
            <h3 data-aos="fade-up" data-aos-duration="1000" className='lg:text-[150%] text-[110%] font-medium text-center'>Companies That Trust Us</h3>
            <div className='mt-[2.5rem] bg-[#1E1E1E] lg:px-[3rem] px-[1rem] py-[1rem] flex items-center justify-between'>
                <img data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className='lg:max-w-[150px] max-w-[50px]' src={'/static/home/haulway.png'} alt="" />
                <img data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className='max-w-[50px]' src={'/static/home/sunflower-pantry.png'} alt="" />
                <img data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className='lg:max-w-[150px] max-w-[50px]' src={'/static/home/amandu-skincare.png'} alt="" />
                <img data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="700" className='lg:max-w-[150px] max-w-[50px]' src={'/static/home/mycut.png'} alt="" />
                <img data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1100" className='lg:max-w-[150px] max-w-[50px]' src={'/static/home/begorah.png'} alt="" />
            </div>
        </section>
    );
};

export default Companies;