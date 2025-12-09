import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getFeaturedPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getFeaturedPosts(3).filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground mb-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl object-cover h-64 md:h-96"
        />
      </div>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div 
            className="prose prose-lg max-w-3xl mx-auto prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} {...relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default BlogPost;
