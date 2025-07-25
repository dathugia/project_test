import React from "react";
import "./BlogSection.css"; // Import your CSS styles

const blogs = [
  {
    title: "5 Ultra-Fun Things for Teens to do at The Beach Club",
    image: "https://templatekit.jegtheme.com/lucan/wp-content/uploads/sites/286/2022/05/group-of-happy-friends-on-the-swimming-pool-e1653991222729.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "The Benefits of Sunscreen: Why Do I Need To Wear SPF",
    image: "https://templatekit.jegtheme.com/lucan/wp-content/uploads/sites/286/2022/05/attractive-woman-with-healthy-skin-applying-sunscreen-for-healthy-tanning.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Sun Bath Therapy: All You Need to Know About Sunbath",
    image: "https://templatekit.jegtheme.com/lucan/wp-content/uploads/sites/286/2022/05/sunbathing-by-the-pool--e1653991153642.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-title">Blog & Article</h2>
      <p className="blog-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
      </p>
      <div className="blog-grid">
        {blogs.map((blog, i) => (
          <div key={i} className="blog-card">
            <div className="image-container">
              <img src={blog.image} alt={blog.title} />
              <span className="badge">Insight</span>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
