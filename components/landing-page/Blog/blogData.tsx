import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Digital Transformation Journey: Unleashing Small Business Potential with Tech Palette",
    paragraph:
      "In today's fast-paced digital landscape, small businesses need more than just a website to thrive; they need a robust online presence. In this blog, we explore how Tech Palette's customized web application development services are empowering small businesses to stand out in the digital crowd.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Web Developer",
    },
    tags: ["Digital Transformation, Web Development"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Mastering the Art of Online Marketing: A Tech Palette Advantage",
    paragraph:
      "In the vast expanse of the internet, it's not just about having a website; it's about being seen. Our second blog delves into how Tech Palette's strategic online marketing services are helping small businesses carve their niche in the digital realm. From SEO magic to social media wizardry, discover how Tech Palette is amplifying online visibility and driving tangible results for small businesses.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Marketing Expert",
    },
    tags: ["Online Marketing, Digital Presence"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Scaling Up with Confidence: Tech Palette's Scalable Solutions for Small Businesses",
    paragraph:
      "Growth is the ultimate goal for any small business, but scaling up can be a daunting task. Our third blog explores how Tech Palette's scalable solutions provide the flexibility small businesses need to expand confidently. Whether it's accommodating increased web traffic or adapting to evolving business requirements, Tech Palette ensures that scaling up is a seamless and stress-free process.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Busniess Analyst",
    },
    tags: ["Business Growth, Scalable Solutions"],
    publishDate: "2023",
  },
];
export default blogData;
