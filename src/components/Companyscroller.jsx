export default function Companyscroller({ text, speed = 4000 }){
    return(
        <>
            <div className="company-scroller">
                <div className="company-wrapper">
                    <section className="company-scroll-section" style={{ "--speed": `${speed}ms` }}>
                    {text.map(({ id, txt }) => (
                        <div className="company-scroll-item" >
                            <img className="xui-img-150 xui-h-100 xui-object-fit-contain" src={`${txt}`} alt="" />
                        </div>
                    ))}
                    </section>
                    <section className="company-scroll-section" style={{ "--speed": `${speed}ms` }}>
                    {text.map(({ id, txt }) => (
                        <div className="company-scroll-item" >
                            <img className="xui-img-150 xui-h-100 xui-object-fit-contain" src={`${txt}`} alt="" />
                        </div>
                    ))}
                    </section>
                    <section className="company-scroll-section" style={{ "--speed": `${speed}ms` }}>
                    {text.map(({ id, txt }) => (
                        <div className="company-scroll-item" >
                            <img className="xui-img-150 xui-h-100 xui-object-fit-contain" src={`${txt}`} alt="" />
                        </div>
                    ))}
                    </section>
                </div>
            </div>
        </>
    )
}