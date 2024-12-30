import Link from "next/link";
export default function Blog() {
    const bloginfo = [
      {
        title: "Transforming Creativity and Innovation",
        slug: "Transforming-Creativity-and-Innovation",
        image: "/pic1.jpg",
        description: "Explore how generative AI models like ChatGPT and DALL·E are reshaping industries like art, content creation, and software development.",
      },
      {
        title: "The Role of AI in Personalized Learning and Education",
        slug: "The-Role-of-AI-in-Personalized-Learning-and-Education",
        image: "/pic2.jpg",
        description:
          "Discuss how AI-powered tools are revolutionizing education with tailored learning experiences and adaptive platforms.",
      },
      {
        title: "AI in Healthcare",
        slug: "AI-in-Healthcare",
        image: "/pic3.jpg",
        description:
          " Improving Diagnostics and Patient Care. Highlight advancements in AI for medical imaging, diagnostics, and healthcare management.",
      },
      {
        title: "The Ethics of AI",
        slug: "The-Ethics-of-AI",
        image: "/pic4.jpg",
        description:
          "Navigating Bias and Accountability Dive into ethical challenges, including bias in AI systems, data privacy concerns, and accountability for AI decisions",
      },
      {
        title: "AI and the Future of Work",
        slug: "AI-and-the-Future-of-Work",
        image: "/pic5.jpg",
        description:
          "Opportunities and Challenges Examine how AI is automating tasks, creating new job roles, and reshaping the global workforce.",
      },
      {
        title: "The Intersection of AI and Web3",
        slug: "The-Intersection-of-AI-and-Web3",
        image: "/pic6.jpg",
        description:
          "Decentralized Intelligence Explore the synergy between AI and Web3, focusing on decentralized AI systems and their potential impact on the internet.",
      },
    ];
  
    return (
      <div
        className="min-h-screen bg-cover bg-center text-white relative "
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        
  
        {/* Blog Section */}
        <div className="container mx-auto p-6 pt-10 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-10 text-shadow-md text-black">
            Latest Blogs
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bloginfo.map((bloginfo) => (
              <a
                key={bloginfo.slug}
                href={`/blog/${bloginfo.slug}`}
                className="group block bg-white overflow-hidden shadow-xl  hover:scale-105 transition duration-300 "
              >
                <div
                  className="h-56 bg-cover bg-center "
                  style={{ backgroundImage: `url(${bloginfo.image})`   }}
                ></div>
                <div className="p-4 text-gray-800">
                  <h3 className="text-xl font-bold group-hover:text-violet-800">
                    {bloginfo.title}
                  </h3>
                  <p className="w-[97px] h-[28px] text-center  rounded bg-violet-100 text-violet-700 mt-2" >Technology</p>
                  <p className="mt-2 text-gray-500">{bloginfo.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
  );
}