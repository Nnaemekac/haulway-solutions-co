// // Spec1item.js
// import React, { useState } from 'react';

// const Spec1item = ({ question, answer }) => {
//   const [showAnswer, setShowAnswer] = useState(false);

//   const toggleAnswer = () => {
//     setShowAnswer(!showAnswer);
//   };

//   return (
//     <div>
//       <button onClick={toggleAnswer}>{question}</button>
//       {showAnswer && <p>{answer}</p>}
//     </div>
//   );
// };

// export default Spec1item;

import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'react-feather';

const Spec1item = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

  return (
    <div className='xui-row'>
        <div className='xui-lg-col-4'>
            {data.map((item, index) => (
            <div className=' xui-cursor-pointer' key={index}>
            <div onClick={() => toggleItem(index)} className='xui-d-flex xui-flex-ai-center xui-bdr-rad-1 xui-py-1 xui-pr-1 xui-pl-half faq-section xui-pos-relative'>
                <h3 className='xui-font-sz-120' style={{"width": "calc(100% - 20px)"}}>{item.question}</h3>
                {activeIndex !== index &&
                <ArrowDownRight size="20" color="#000"/>
                
                }
                {activeIndex === index &&
                <ArrowUpRight size="20" color="#000"/>
                }
            
            </div>
            {activeIndex === index &&
            <div className='xui-p-half'>
                    {item.answer.map((ans, index) => (
                    <p key={index} onClick={() => handleTabClick(index)} className={'xui-opacity-6 xui-font-sz-100 xui-my-1 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-2 ' + (activeTab === index ? 'primary-color' : '')}>{ans}</p>
                ))}
            </div>
            }
            </div>
        ))}
        </div>
      
      <div className='xui-lg-col-8 xui-p-1'>
        {activeTab === 0 && 
            <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half'>In the dynamic landscape of diverse sales channels, companies face the challenge of maintaining focus on traditional sales efforts, such as tele sales, amidst the array of emerging options. However, particularly in challenging economic times, the telephone remains a highly effective method for converting new customers. To address the risk of losing focus and to optimize performance while controlling costs, companies can consider outsourcing some or all of their tele sales operations. Grascope, with its commitment to ensuring tele sales success, combines cutting-edge facilities in Manila, The Philippines, with its unique 'Metrics of Excellence' framework, a comprehensive vision for performance and service embedded in every aspect of their operations. Grascope's domain expertise in offshore tele sales services encompasses all facets of their operation. This includes recruiting top-tier agents, implementing advanced technologies, and providing effective management and oversight for sales staff. Collaborating closely with clients, Grascope tailors solutions that align seamlessly with their business needs. This collaborative approach begins with strategic planning, extends to the seamless integration of offshore operations with local teams, and encompasses ongoing operation and expansion efforts. By gaining a deep understanding of clients' businesses, Grascope creates dedicated teams that contribute to their success, positively reflecting on their products and brand.</p>
        }
        {activeTab === 1 && 
            <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half'>In virtually every industry, companies are locked in fierce competition, facing immense pressure to optimize their resources. Managers and entrepreneurs operate in a high-stakes environment where decisions must be made swiftly and with little margin for error. For companies relying on teleservices to support their customers, finding solutions that offer both superior customer support and cost efficiency, operational flexibility, and strategic compatibility is paramount. This is precisely where Grascope comes in.

            Grascope has established a cutting-edge call center in Manila designed to tackle these exact challenges head-on. Our operation is meticulously crafted from the ground up to cater to the diverse and demanding teleservices needs of small and medium-sized businesses. We pride ourselves on being flexible, focused, cost-effective, and service-oriented. Central to our vision are comprehensive metrics of excellence that are ingrained in our DNA, setting clear benchmarks for every employee and the organization as a whole.
            
            Through our remote staff customer service outsourcing services, we offer to create a team that delivers world-class service and performance, whether you require a single virtual help desk agent or a complete team. Our domain expertise in offshore customer service encompasses every facet of our operation, from sourcing top-tier Philippine customer service professionals to implementing cutting-edge technologies and providing effective management and oversight for your support staff.
            
            At Grascope, we collaborate closely with you to tailor a solution perfectly aligned with your business needs. This begins with strategic planning for your operation and extends seamlessly to integration with your local team, operational execution, and future expansion. By deeply understanding your business, we ensure that the team we assemble is fully dedicated to your success, positively reflecting on your products and brand.
            
            We invite you to reach out to us today to learn more about how we can assist you in maximizing your resources and enhancing your outcomes. With Grascope by your side, you can navigate the complexities of customer support outsourcing with confidence and efficiency.</p>
        }
        {activeTab === 2 && 
            <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half'>In the era of evolving communication channels, encompassing the internet, social networking, and SMS, businesses are compelled to adapt to novel methods of engaging with their clientele. Offering strategic and prompt options to web visitors not only heightens customer satisfaction but also significantly boosts conversion rates.

            Live Chat has emerged as a crucial element in a comprehensive e-commerce strategy, proving to be an exceptionally effective means of providing general support, offering technical assistance, retaining customers, generating sales, and generating leads. Grascope presents a suite of Live Chat and email services, ranging from agent resourcing to complete turn-key solutions that encompass staffing, integration, CRM, reporting, and analytics.
            
            Our Live Chat, Email Support, and Click-to-Call technology seamlessly integrate with any website, providing a range of options for customer interaction along with robust data gathering and CRM support. Grascope empowers you to enhance website sales and customer support swiftly, effortlessly, and at a cost that aligns with business objectives.
            
            Built from the ground up, our operation is designed to meet the diverse and demanding customer support needs of small and medium-sized businesses. We pride ourselves on being flexible, focused, cost-effective, and service-oriented. At the heart of our vision lie comprehensive performance metrics that are ingrained in our DNA, serving as a clear benchmark for each employee and the organization as a whole. Whether you require a single agent or an entire team, we will assist you in establishing an integrated offshore unit that delivers world-class service and performance.
            
            Our domain expertise in offshore customer service spans every facet of our business, from sourcing top-tier agents to implementing cutting-edge technologies and providing effective management and oversight for your support staff. We collaborate closely with you to devise a solution tailored to your business, commencing with the strategic planning of your operation, seamless integration with your local team, and extending to operation and expansion. By truly understanding your business, we create a dedicated team committed to your success, positively reflecting on your products and brand.
            
            Feel free to reach out to us today to discover more about how our Live Chat solutions can help you optimize your resources and enhance your results. There is no obligation until you find the perfect fit for your business.</p>
        }
        {activeTab === 3 && 
            <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half'>Since its establishment in 2006, Grascope has been a trusted provider of cost-effective outsourced content moderation services to globally recognized brands. Leveraging our domain expertise and operational efficiency, we empower clients to optimize their resources, enhance customer services, and safeguard their brand integrity.</p>
        }
        {activeTab === 4 && 
            <>
                <h3 className='xui-font-sz-100'>Content Reigns Supreme</h3>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>In the dynamic landscape of the Internet, a rapidly expanding marketing channel, a plethora of opportunities are available, accompanied by challenges such as intense competition and ever-evolving technology. For companies, internet-based marketing has become indispensable for attracting new customers and engaging with existing ones. The stakes are higher than ever for these companies to craft an effective internet strategy that optimizes resources for consistent results.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>However, as the importance of Internet marketing ROI intensifies, the path to establishing a robust online presence, including securing high organic search rankings and creating standout content amidst competitors, has become more challenging. In this scenario, there is no substitute for thoughtful, high-quality content, which should permeate every facet of an online strategy, spanning the company website, social media, blogging, videos, mail, and beyond.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>At Grascope, our commitment lies in empowering companies to surpass expectations by providing highly skilled professionals in Philippine SEO/SEM, PPC, and content creation, including writers, social media specialists, graphic artists, and animators. Apart from the cost advantages derived from our Philippine location, Grascope brings significant domain expertise, accumulated over years of delivering top-tier SEO/SEM services to an array of international clients. Our experience ensures access to best practices, cutting-edge technology, and research, guaranteeing results. By collaborating with an integrated team under one roof, clients can build equity in a team that comprehends their business and is collectively dedicated to their success.</p>
            </>
        }
        {activeTab === 5 && 
            <>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Social media marketing aims to engage and connect with an organization’s customers through an interactive exchange of information, preferences, and other compelling content. Despite being a relatively new type of marketing, many businesses report that social media marketing is critical to their sales, marketing and brand. Use of social media channels helps convert social interactions into consumer purchasing action by building advocacy and loyalty. It is also an essential component of a company’s overall online presence; and when used properly can greatly improve a company’s search engine visibility.
                Social media marketing professionals grow and engage communities around products or services. They manage social programs, plan for custom content generation and create digital assets, increase brand awareness, attract potential customers, and increase profitability. It is a specialized skill and a labor-intensive process that requires significant resources to launch and maintain.
                Grascope is a custom offshore staffing solutions firm providing the services of the best social media marketing professionals in the Philippines. We offer a range of social media and digital marketing solutions to help businesses connect with their target audience and improve the bottom line. Our social media marketing services include social media identity planning, development, management and maintenance, content creation, data collection and analysis, and reputation enhancement. We can provide these services on a project basis with a defined set of deliverables and benchmarks; or in the form of staff leasing whereby the social media specialists act as your own employees and you are able to build long-term process equity through your outsourced team.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Social media marketing results can be measured by customer engagement data, such as page views, likes, shares, backlinks, and comments on various social media sites. Whether you are a small business establishing an online presence or a large company looking to augment or improve your current social media marketing strategy, you need social media experts to get the most out of the process.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>At Grascope, our commitment lies in empowering companies to surpass expectations by providing highly skilled professionals in Philippine SEO/SEM, PPC, and content creation, including writers, social media specialists, graphic artists, and animators. Apart from the cost advantages derived from our Philippine location, Grascope brings significant domain expertise, accumulated over years of delivering top-tier SEO/SEM services to an array of international clients. Our experience ensures access to best practices, cutting-edge technology, and research, guaranteeing results. By collaborating with an integrated team under one roof, clients can build equity in a team that comprehends their business and is collectively dedicated to their success.</p>
            </>
        }
        {activeTab === 6 && 
            <>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Regular communication with clients is crucial to business success, and email marketing is one of the most effective ways to do this. Email marketing is the use of email to send a commercial message to your target audience. Managed properly, email marketing campaigns can drive a high return on investment. Most organizations use email marketing because it is significantly more affordable and faster than regular mail or other forms of communication. With email blasts, marketers can reach large numbers of subscribers and potential customers.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Email marketing campaigns allow businesses to solicit sales, acquire new customers, build loyalty, engage existing customers, understand consumer behavior, and improve brand awareness. Whether you need to generate leads or boost audience engagement, email marketing is a powerful tool to achieve your goals cost-effectively. If you already use search engine marketing, email marketing can further enhance effective communication between your business and clients.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Creating and managing successful email marketing campaigns requires experienced, talented professionals, but the cost of hiring full-time email marketing professionals can be very high, especially for startups and small businesses. Even if you can afford to build a team of in-house email marketing experts, it is often ideal to work with an experienced third party.</p>
            </>
        }
        {activeTab === 7 && 
            <>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Content marketing, encompassing the creation and distribution of both traditional and digital media, plays a pivotal role in engaging and expanding an organization's customer base. Various forms of content, such as news articles, blog and video posts, images, infographics, e-books, white papers, FAQs, and interactive media, need thoughtful planning and targeting to align with a company's specific marketing objectives.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Successful content marketing is instrumental in reinforcing and maintaining an organization's trustworthiness, credibility, and expertise. Unlike direct online sales marketing, content marketing takes an indirect approach, aiming to educate customers about the benefits of a product or service through blog posts, images, and videos.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Compelling content, akin to direct marketing, has the power to generate leads, boost sales, and improve profits. Social media channels amplify this impact, allowing the audience to share, "like," and promote content. This, in turn, aids in creating brand awareness, fostering loyalty, and expanding communities around businesses.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Measuring the effectiveness of content marketing in terms of return on investment (ROI) poses a challenge without a solid content strategy. Content strategy involves aligning consumer needs with brand campaigns, ensuring that the right content reaches the right customer at the right time. The content marketing process begins with strategic planning and development, followed by content creation and distribution—all of which require highly specialized skills.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Finding the right marketing talent to develop meaningful content can be a daunting task. Companies opting for in-house content marketing teams recognize the significant investment involved, not only in hiring and supporting full-time professionals but also in infrastructure and related expenses. Consequently, many businesses are turning to third-party content marketing strategists and experts to achieve their goals.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>Grascope Content Marketing Solutions specializes in helping global companies attract, connect with, and grow their target audience by providing highly skilled content marketing professionals based in the Philippines. The team comprises top writers, designers, filmmakers, strategists, and online marketing experts who aim to build and grow a community around a brand.</p>
                <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-mt-1'>The expertise of Grascope's content marketing professionals spans keyword research, target audience analysis, competitive analysis, benchmarking strategy, search engine marketing, content amplification, social promotion, responsive design, structured data services, sponsored content, and more. These specialists bring a blend of creativity and analytics to the table, backed by professional experience in ROI-driven marketing campaigns and proficiency in content marketing software and tools.</p>
            </>
        }
      </div>
    
    </div>
  );
};

export default Spec1item;

