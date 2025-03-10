import LogoV1 from "../assets/images/brand/logo-v-1.png"
export default function Loader(){
   
    return(
        <>
        <section className='xui-loader hsd-loader-screen fixed bg-[#FFF] h-screen top-[0] left-[0] z-[30] w-full flex items-center justify-center'>
            <div className='xui-mx-w-400 xui-text-center'>
                <img className='xui-img-200 xui-mx-auto xui-mb-1' src={LogoV1} alt="logo" />
                <div className='xui-w-200'>
                    <span className='xui-d-inline-block xui-font-sz-100 xui-text-white'>Loading...</span>
                    <div className='hsd-loader-holder'>
                        <span className='hsd-loader-anime'></span>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
