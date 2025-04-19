import { Calendar, Clock } from "lucide-react"; // Optional: for icons

const BlogCard = ({ image, readTime, link }) => {
  return (
    <div className="bg-white rounded-2xl  p-4 ">
      <img
        src={image}
        alt={"img"}
        className="max-w-full h-auto object-cover rounded-xl mb-4"
      />
      <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-black  Inter600 mb-2">
        Here’s how to decorate your new home from scratch
      </h3>
      <div className="flex items-center text-sm text-gray-700 space-x-4 mb-4">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          August 20, 2024
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {readTime} read
        </span>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 text-sm font-medium text-black border border-gray-300 rounded-md hover:bg-gray-100 transition"
      >
        Read more
      </a>
    </div>
  );
};

export default BlogCard;
