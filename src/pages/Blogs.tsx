import { ChevronLeft, Search } from "@carbon/icons-react";
import { LetsIconsFilter } from "../components/icons";
import BlogCard from "../components/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";

const recentBlogs = [
  {
    image: "/static/blog/mobile-banking-3d-animated-concept-video.png",
    heading: "The Future of Hiring: How Technology is Revolutionizing Recruitment",
    category: "Article",
    views: 10,
    link: "/blog/boost-productivity",
  },
  {
    image: "/static/blog/istockphoto-1475805610-612x612.png",
    heading: "Beyond the Resume: Leveraging Background Checks for Smarter Hiring",
    category: "Article",
    views: 8,
    link: "/blog/bpo-outsourcing",
  },
  {
    image: "/static/blog/istockphoto-1410535942-612x612.png",
    heading: "Candidate Screening 101: Best Practices for Efficient and Effective Recruitment",
    category: "Article",
    views: 15,
    link: "/blog/scalable-teams",
  },
  {
    image: "/static/blog/depositphotos_510739382-stock-photo-handshake-icon-symbol-handshake-business.png",
    heading: "Navigating Legal and Ethical Considerations in Modern Recruitment",
    category: "Article",
    views: 12,
    link: "/blog/automation-business",
  },
];

const blogSlides = [
  {
    image: "/static/blog/tech-and-innovation.png",
    heading: "Technology & Innovation in Recruitment",
    link: "/blog/boost-productivity",
  },
  {
    image: "/static/blog/background-checks.png",
    heading: "Candidate Screening & Background Checks",
    link: "/blog/bpo-outsourcing",
  },
  {
    image: "/static/blog/transparent-hiring.png",
    heading: "Legal, Ethical, & Transparent Hiring",
    link: "/blog/scalable-teams",
  },
  {
    image: "/static/blog/industry-case-studies.png",
    heading: "Success Stories & Industry Case Studies",
    link: "/blog/automation-business",
  },
];

const allBlogs = [...recentBlogs];

const Blogs = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof allBlogs>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Calculate last slide index for desktop (4 per slide)
  const lastSlideIdx = Math.max(0, Math.ceil(blogSlides.length / 4) - 1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    const results = recentBlogs.filter(
      blog =>
        blog.heading.toLowerCase().includes(search.trim().toLowerCase()) ||
        (blog.category && blog.category.toLowerCase().includes(search.trim().toLowerCase()))
    );
    setSearchResults(results);
    setSearchTerm(search);
    setSearch("");
    setSearching(true);
  };

  // Pagination logic for recent blogs
  const blogsToShow = showAll ? recentBlogs : recentBlogs.slice(0, 4);

  return (
    <>
      <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
        <section className="py-[3rem]">
          <div className="text-center">
            <h1 className="lg:text-[250%] text-[180%] text-[#F5FFFF] font-[600]">Grascope Insights</h1>
            <p className="lg:text-[95%] text-[85%] opacity-[.8] leading-[1.5rem] mt-[1rem] mx-auto lg:w-[55%] w-full">
              Discover trends, expert analyses, and innovative solutions across recruitment, technology, and business strategy—all powered by Grascope.
            </p>
          </div>
          <form
            className="mt-[1.5rem] bg-white rounded-full shadow-md flex gap-3"
            onSubmit={handleSearch}
          >
            <div className="flex items-center justify-center w-[80px] text-gray-500 text-xl bg-[#F7F8FA] rounded-l-full rounded-r-none">
              <LetsIconsFilter />
            </div>
            <div className="flex items-center justify-between flex-grow rounded-full px-[.5rem] py-[.5rem]">
              <div className="flex items-center flex-1">
                <span className="text-gray-500 text-lg mr-2">
                  <Search />
                </span>
                <input
                  type="text"
                  placeholder="Search for insights"
                  className="bg-transparent outline-none text-sm w-full text-[#000]"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white text-sm font-medium px-[3rem] py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Search
              </button>
            </div>
          </form>
        </section>
        {/* Show Blogs Section */}
        {!searching && (
          <section className="show-blog">
            <section className="py-[2rem]">
              <div className="flex items-center justify-between mb-[1.5rem]">
                <h3 className="text-[150%] font-medium">Recently added</h3>
                {recentBlogs.length > 4 && (
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="bg-[#F5FFFF] text-[#141414] font-light px-[2rem] py-[.6rem] rounded-full hover:bg-black hover:text-white transition"
                  >
                    {showAll ? "Show less" : "View all"}
                  </button>
                )}
              </div>
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-[1rem]">
                {blogsToShow.map((blog, idx) => (
                  <BlogCard key={idx} {...blog} variant="full" />
                ))}
              </div>
            </section>
            {/* Browse by topics Swiper Section */}
            <section className="py-[2rem]">
              <div className="flex items-center justify-between mb-[1.5rem]">
                <h3 className="text-[150%] font-medium">Browse by topics</h3>
                <div className="flex gap-2">
                  <button
                    ref={prevRef}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition border shadow-[0_2px_6px_0px_rgba(0,0,0,0.15),0_-2px_6px_0px_rgba(211,211,211,0.5)] bg-[#1E1E1E] ${activeSlide === 0 ? "border-white" : "border-transparent"}`}
                    aria-label="Previous"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    ref={nextRef}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition border shadow-[0_2px_6px_0px_rgba(0,0,0,0.15),0_-2px_6px_0px_rgba(211,211,211,0.5)] bg-[#1E1E1E] ${activeSlide === lastSlideIdx ? "border-white" : "border-transparent"}`}
                    aria-label="Next"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  1024: { slidesPerView: 4 },
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = prevRef.current;
                  // @ts-ignore
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                onSlideChange={(swiper) => {
                  setActiveSlide(swiper.activeIndex);
                }}
                className="w-full"
              >
                {blogSlides.map((blog, idx) => (
                  <SwiperSlide key={idx}>
                    <BlogCard {...blog} variant="simple" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </section>
        )}
        {/* Blog Result Section */}
        {searching && (
          <section className="blog-result py-[2rem]">
            <div className="flex items-center gap-2 mb-2">
              <button
                className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black transition"
                onClick={() => setSearching(false)}
                aria-label="Back"
                type="button"
              >
                <ChevronLeft />
              </button>
              <h2 className="text-[200%] font-medium">{searchTerm}</h2>
            </div>
            <p className="mb-6">
              Showing {searchResults.length} of {searchResults.length} results
            </p>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-[1rem]">
              {searchResults.length > 0 ? (
                searchResults.map((blog, idx) => (
                  <BlogCard key={idx} {...blog} variant="full" />
                ))
              ) : (
                <div className="col-span-4 text-center text-gray-400 py-12">
                  No results found for "{searchTerm}"
                </div>
              )}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                className="underline text-[#141414] font-semibold"
                onClick={() => setSearching(false)}
              >
                Back to all blogs
              </button>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Blogs;