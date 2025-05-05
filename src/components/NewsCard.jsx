import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md rounded-xl  space-y-4">
      {/* Author + Actions */}
      <div className="flex justify-between items-center bg-base-200 p-6 ">
        <div className="flex items-center gap-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold">{title}</h2>

      {/* Thumbnail Image */}
      <img src={thumbnail_url} alt="News" className="rounded-md w-full" />

      {/* Details */}
      <p className="text-sm text-gray-700">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}... <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer">Read More</Link>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer: Rating + Views */}
      <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "text-orange-400" : "text-gray-300"} />
          ))}
          <span className="ml-2 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
