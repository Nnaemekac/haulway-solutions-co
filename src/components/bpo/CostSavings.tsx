import { IconParkSolidCheckOne, MaterialSymbolsCancelRounded } from '../icons';
import SectionComponent from '../SectionComponent';

const CostSavings = () => {
    return (
        <section className="xui-py-3">
            <SectionComponent subheading='Key Competitive Advantages' heading='Cost Savings Compared to Traditional Hiring'/>
            <div className="overflow-x-auto cost-savings-table mt-[2rem] bg-[#1E1E1E] p-[1.5rem] rounded-[1rem]">
                <table className="w-full border-collapse relative">
                    <h3 className='font-normal lg:text-[150%] text-[90%] absolute left-1/2 -translate-x-1/2 top-[20px]'>VS</h3>
                    <thead>
                        <tr>
                            <th className='lg:text-[180%] text-[120%] font-medium'> Position UK Hiring Cost</th>
                            <th className='lg:text-[180%] text-[120%] font-medium'>Grascope Cost Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><MaterialSymbolsCancelRounded /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>Customer Support: <span className='font-medium'>£3,000/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><IconParkSolidCheckOne /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>Customer Support: <span className='font-medium'>£1,500/month (50% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><MaterialSymbolsCancelRounded /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>Software Developer: <span className='font-medium'>£5,500/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><IconParkSolidCheckOne /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>Software Developer: <span className='font-medium'>£2,000/month (64% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><MaterialSymbolsCancelRounded /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>Digital Marketing: <span className='font-medium'>£4,000/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><IconParkSolidCheckOne /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>Digital Marketing: <span className='font-medium'>£1,800/month (55% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><MaterialSymbolsCancelRounded /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>HR Manager: <span className='font-medium'>£4,500/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><IconParkSolidCheckOne /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>HR Manager: <span className='font-medium'>£1,500/month (67% savings)</span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><MaterialSymbolsCancelRounded /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>Data Analyst: <span className='font-medium'>£5,000/month</span></p>
                                </div>
                            </td>
                            <td>
                                <div className='flex items-center'>
                                    <span className='w-[25px] h-[25px] rounded-full flex justify-center items-center '><IconParkSolidCheckOne /></span>
                                    <p className='text-[90%] pl-[1rem] leading-[1.5rem] w-[calc(100%-25px)]'>Data Analyst: <span className='font-medium'>£2,500/month (50% savings)</span></p>
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