import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

const BlogCard = ({ slug, title, excerpt, date, category, image, featured = false }: BlogCardProps) => {
  return (
    <Link 
      to={`/blog/${slug}`}
      className={`group block bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 ${featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-full' : 'h-48'}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </div>
        <h3 className={`font-display font-bold text-foreground group-hover:text-primary transition-colors mb-3 ${featured ? 'text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
          Read More <ArrowRight className="h-4 w-4 ml-1" />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
