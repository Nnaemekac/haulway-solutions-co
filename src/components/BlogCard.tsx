import { Link } from 'react-router-dom';
import { SolarDocumentAddLinear } from './icons';

type BlogCardProps = {
  image: string;
  heading: string;
  category?: string;
  views?: number | string;
  link?: string;
  variant?: 'full' | 'simple';
};

export default function BlogCard({
  image,
  heading,
  category,
  views,
  link = '#',
  variant = 'full',
}: BlogCardProps) {
  if (variant === 'simple') {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md bg-[#222222] max-w-sm w-full">
        <img className="h-[250px] w-full" src={image} />
        <div className="px-4 h-[120px] flex flex-col justify-center">
          <h2 className="text-xl font-medium">{heading}</h2>
        </div>
      </div>
    );
  }

  // Default: full version
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-[#222222] max-w-sm w-full">
      <img className="h-[250px] w-full" src={image} />
      <div className="h-[260px] p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-medium">{heading}</h2>
          <div className="text-sm flex items-center gap-[.6rem] mt-[1rem]">
            <div className="flex items-center gap-3">
              <SolarDocumentAddLinear />
              <span>{category}</span>
            </div>
            |
            <span>{views} mins read</span>
          </div>
        </div>
        <div>
          <Link
            to={link}
            className="mt-4 inline-block border border-white text-white text-sm px-4 py-2 rounded-full hover:bg-black transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}