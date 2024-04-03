import { Link } from "react-router-dom"

const Blogs = () => {
  return (
    <>
        <div className="xui-container  xui-lg-py-4 xui-py-2">
            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <div>
                    <p className='xui-font-sz-80'>Blogs</p>
                    <h1 className="xui-lg-font-sz-200 xui-font-sz-150">Read our latest blogs</h1>
                </div>
                <p className='xui-font-sz-80 xui-line-height-1-half xui-lg-text-right xui-text-left xui-w-500 xui-opacity-8'>We can help visualize, even the craziest Ideas converting them into elegant designs, great experiences etc...</p>
            </div>
            <hr className="xui-my-4" />
            <div className="xui-d-grid xui-grid-gap-2 xui-lg-grid-col-3 xui-grid-col-1">
                <div className="xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end">
                    <div className="xui-d-flex xui-flex-ai-center">
                        <span className="secondary xui-h-5 xui-w-5 xui-bdr-rad-circle"></span>
                        <p className='xui-font-sz-80 xui-ml-1'>Design</p>
                    </div>
                    <p className='xui-font-sz-120 xui-w-fluid-80 xui-font-w-bold xui-mt-half'>Color theory for designers</p>
                    <p className='xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-mt-half'>Converting them into elegant designs, greate experiences and catchy brands.</p>
                    <img className='xui-w-fluid-100 xui-h-250 xui-mt-3 xui-bdr-rad-half' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                </div>
                <div className="xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end">
                    <div className="xui-d-flex xui-flex-ai-center">
                        <span className="secondary xui-h-5 xui-w-5 xui-bdr-rad-circle"></span>
                        <p className='xui-font-sz-80 xui-ml-1'>Design</p>
                    </div>
                    <p className='xui-font-sz-120 xui-w-fluid-80 xui-font-w-bold xui-mt-half'>Color theory for designers</p>
                    <p className='xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-mt-half'>Converting them into elegant designs, greate experiences and catchy brands.</p>
                    <img className='xui-w-fluid-100 xui-h-250 xui-mt-3 xui-bdr-rad-half' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                </div>
                <div className="xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end">
                    <div className="xui-d-flex xui-flex-ai-center">
                        <span className="secondary xui-h-5 xui-w-5 xui-bdr-rad-circle"></span>
                        <p className='xui-font-sz-80 xui-ml-1'>Design</p>
                    </div>
                    <p className='xui-font-sz-120 xui-w-fluid-80 xui-font-w-bold xui-mt-half'>Color theory for designers</p>
                    <p className='xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-mt-half'>Converting them into elegant designs, greate experiences and catchy brands.</p>
                    <img className='xui-w-fluid-100 xui-h-250 xui-mt-3 xui-bdr-rad-half' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                </div>
            </div>
            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-flex-end xui-mt-2'>
                <Link className='xui-font-sz-80 xui-text-dc-none ' to="/">See all</Link>
            </div>
        </div>
    </>
    
  )
}

export default Blogs