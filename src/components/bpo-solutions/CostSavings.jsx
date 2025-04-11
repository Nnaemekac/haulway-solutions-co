import React from 'react';
import GoodTick from '../custom-svg-icons/GoodTick';
import BadTick from '../custom-svg-icons/BadTick';
import SectionComponent from '../home/components/SectionComponent';

const CostSavings = () => {
    return (
        <section className="xui-py-3">
            <SectionComponent subheading='Key Competitive Advantages' heading='Cost Savings Compared to Traditional Hiring'/>
            <div className="xui-table-responsive cost-savings-table xui-mt-2 bg-[#1E1E1E] xui-p-1-half xui-bdr-rad-1">
                <table className="xui-table xui-pos-relative" style={{width: '100%', borderCollapse: 'collapse;'}}>
                    <h3 className='xui-font-w-400 xui-lg-font-sz-150 xui-font-sz-90 cost-savings-heading'>VS</h3>
                    <thead>
                        <tr>
                            <th className='xui-lg-font-sz-180 xui-font-sz-120 xui-font-w-500'> Position UK Hiring Cost</th>
                            <th className='xui-lg-font-sz-180 xui-font-sz-120 xui-font-w-500'>Grascope Cost Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><BadTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>Customer Support: <span className='xui-font-w-500'>£3,000/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><GoodTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>Customer Support: <span className='xui-font-w-500'>£1,500/month (50% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><BadTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>Software Developer: <span className='xui-font-w-500'>£5,500/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><GoodTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>Software Developer: <span className='xui-font-w-500'>£2,000/month (64% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><BadTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>Digital Marketing: <span className='xui-font-w-500'>£4,000/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><GoodTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>Digital Marketing: <span className='xui-font-w-500'>£1,800/month (55% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><BadTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>HR Manager: <span className='xui-font-w-500'>£4,500/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><GoodTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>HR Manager: <span className='xui-font-w-500'>£1,500/month (67% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><BadTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>Data Analyst: <span className='xui-font-w-500'>£5,000/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='xui-d-flex xui-flex-ai-center'>
                                    <span className='xui-w-25 xui-h-25 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center '><GoodTick /></span>
                                    <p className='xui-font-sz-90 xui-pl-1 xui-line-height-1-half' style={{width: 'calc(100% - 25px)'}}>Data Analyst: <span className='xui-font-w-500'>£2,500/month (50% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CostSavings;