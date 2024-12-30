"use client";
import { useState } from "react";
type BlogProps = {
  params: { slug: string };
};

const blogData: Record<string, { title: string; content: string; }> = {
  "Transforming-Creativity-and-Innovation": {
    title: "Generative AI: Transforming Creativity and Innovation",
    content: "Explore how generative AI models like ChatGPT and DALL·E are reshaping industries like art, content creation, and software development Generative AI creates new content like text, images, and music by learning from existing data, revolutionizing creativity and problem-solving. It empowers artists, writers, and innovators by automating idea generation, design, and prototyping. In industries, it accelerates innovation, enabling personalized experiences and breakthroughs in fields like healthcare, marketing, and technology. By blending human ingenuity with AI, it redefines the creative process and drives innovation.",
  },
  "The-Role-of-AI-in-Personalized-Learning-and-Education": {
    title: "The Role of AI in Personalized Learning and Education",
    content: "Discuss how AI-powered tools are revolutionizing education with tailored learning experiences and adaptive platforms. AI is revolutionizing education by enabling personalized learning experiences tailored to individual needs. Through adaptive learning systems, AI analyzes student performance, identifies strengths and weaknesses, and customizes content to suit their pace and style. Virtual tutors provide on-demand assistance, while AI-driven tools like chatbots and recommendation engines enhance engagement and resource accessibility. Instructors also benefit as AI streamlines administrative tasks, generates insights into student progress, and supports data-driven decision-making. By fostering inclusivity and efficiency, AI transforms education into a more personalized, accessible, and impactful experience for learners worldwide",
  },
  "AI-in-Healthcare": {
    title: "AI in Healthcare: Improving Diagnostics and Patient Care",
    content:"Highlight advancements in AI for medical imaging, diagnostics, and healthcare management. AI is transforming healthcare by enhancing diagnostics, treatment, and patient care. AI-powered tools analyze medical data to identify patterns, enabling early disease detection and accurate diagnoses. Advanced systems like machine learning models assist in drug discovery and personalized treatment plans tailored to individual patients. In hospitals, AI optimizes workflows, automates administrative tasks, and improves resource allocation. Wearable devices with AI capabilities monitor patient health in real time, promoting proactive care and better outcomes. By combining innovation with efficiency, AI is reshaping healthcare, making it more accessible, accurate, and patient-centric.",
  },
  "The-Ethics-of-AI": {
    title: "The Ethics of AI: Navigating Bias and Accountability",
    content: "Dive into ethical challenges, including bias in AI systems, data privacy concerns, and accountability for AI decisions. The ethics of AI revolves around ensuring the responsible and fair use of artificial intelligence technologies. Key concerns include bias in algorithms, which can lead to unfair outcomes, and privacy issues arising from the use of sensitive data. Transparency in AI decision-making is critical to maintaining trust, while accountability ensures that creators and organizations are responsible for their systems' actions. Other ethical challenges involve balancing automation with job displacement, addressing potential misuse, and aligning AI's objectives with human values. By prioritizing fairness, safety, and inclusivity, ethical AI development aims to maximize benefits while minimizing harm.",
  },
  "AI-and-the-Future-of-Work": {
    title: "AI and the Future of Work: Opportunities and Challenges",
    content: "Examine how AI is automating tasks, creating new job roles, and reshaping the global workforce. AI is reshaping the future of work by automating repetitive tasks, enhancing productivity, and enabling new job opportunities. It empowers employees by handling mundane activities, allowing them to focus on creative and strategic roles. In industries like manufacturing, healthcare, and finance, AI-driven tools improve efficiency and decision-making. However, AI also poses challenges such as workforce displacement and the need for reskilling. As businesses adapt, the emphasis will shift toward jobs that require human creativity, emotional intelligence, and collaboration with AI. By fostering innovation and adaptability, AI is redefining the workplace for a more dynamic and tech-driven future.",
  },
  "The-Intersection-of-AI-and-Web3": {
    title: "The Intersection of AI and Web3: Decentralized Intelligence",
    content: "Explore the synergy between AI and Web3, focusing on decentralized AI systems and their potential impact on the internet. The fusion of AI and Web3 is revolutionizing how we interact with technology by combining intelligent automation with decentralized systems. AI enhances Web3 applications by analyzing large datasets, personalizing user experiences, and optimizing decentralized finance (DeFi) operations. It powers smarter contracts, enabling dynamic and adaptive blockchain interactions. Web3, in turn, ensures secure, transparent, and privacy-focused AI implementation by leveraging decentralized storage and data sovereignty. This synergy facilitates innovations in areas like decentralized autonomous organizations (DAOs), NFT marketplaces, and metaverse experiences, creating a future where intelligence and decentralization coexist seamlessly.",
  },
};

export default function BlogPost({ params }: BlogProps) {
  const { slug } = params;
  const blogsection = blogData[slug];

  // State for comments

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center text-white mt-20 ">
      <div className="max-w-3xl w-full sm:p-12 m-12 rounded-lg shadow-lg bg-gradient-to-r from-indigo-900 to-purple-900 font-[sans-serif]">
        <h1 className="text-3xl sm:text-4xl font-bold">{blogsection.title}</h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed">{blogsection.content}</p>
       
   <div className="mt-8">
   <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comments</h2>

   <div className="mb-4">
     {comments.length === 0 ? (
       <p className="text-gray-200">
         No comments yet. 
       </p>
     ) : (
       <ul>
         {comments.map((comment, index) => (
           <li
             key={index}
             className="border-b border-gray-300 py-2 text-gray-200"
           >
             {comment}
           </li>
         ))}
       </ul>
     )}
   </div>

   <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
     <input
       type="text"
       value={newComment}
       onChange={(e) => setNewComment(e.target.value)}
       placeholder="Write a comment..."
       className="text-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none w-full sm:w-auto"
     />
     <button
       onClick={handleAddComment}
       className="mt-4 sm:mt-0 px-4 py-2 bg-white text-violet-600 rounded-lg hover:bg-gray-100"
     >
       Add Comment
     </button>
   </div>
 </div>
      </div>
    </div>
    
   
  )
}
