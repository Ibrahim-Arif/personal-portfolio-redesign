"use client";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import Image from "next/image";
import CTA from "./CTA";

const feedbacks = [
  {
    text: "Highly recommended! Responsive, collaborative, and detail-oriented, delivering a polished app with great animations and a seamless App Store submission process.",
    clientName: "Justin Garrity",
    clientCountry: "United States",
    clientRole: "VP Product @ ChartHop",
    clientImage: "https://i.ibb.co/zVRN8Ppc/1649044781924.jpg",
    linkedin: "https://www.linkedin.com/in/justinogarrity/",
  },
  {
    text: "Ibrahim is a skilled mobile app developer and project manager, excelling in communication, collaboration, and timely delivery.",
    clientName: "Boris Kriuk",
    clientCountry: "Hong Kong",
    clientRole: "CEO @ Sparcus Technologies",
    clientImage: "https://i.ibb.co/YFbjPc1x/Client-Photo-2.png",
    linkedin: "https://www.linkedin.com/in/boris-kriuk/",
  },
  {
    text: "Great start to our collaboration—excellent quality, communication, and efficiency. Ibrahim delivered solid, proactive solutions, laying a strong foundation for future work.",
    clientName: "Martijn Coevert",
    clientCountry: "Netherlands",
    clientRole: "Co-founder @ Teamy",
    clientImage: "https://i.ibb.co/vxBZXxtd/1699614820506.jpg",
    linkedin: "https://www.linkedin.com/in/martijncoevert/",
  },
  {
    text: "Working with Ibrahim and his team is seamless. His timeline and responsiveness to messaging is great, and overall he is a professional.",
    clientName: "Dr. DJ Haeussler",
    clientCountry: "United States",
    clientRole: "Founder @ The Animal Eye Institute",
    clientImage: "https://i.ibb.co/bjG6VdcS/1627007875130.jpg",
    linkedin: "https://www.linkedin.com/in/dj-haeussler-jr-67230b39/",
  },
  {
    text: "Ibrahim is an exceptional software developer and project manager, delivering reliable, high-quality solutions with excellent communication, 24/7 availability. Highly recommended for long-term collaboration.",
    clientName: "Mike Künnecke",
    clientCountry: "Germany",
    clientRole: "Founder @ DRESSPLANER",
    clientImage: "https://i.ibb.co/4qZCVzF/1723029503807.jpg",
    linkedin: "https://www.linkedin.com/in/mikekuennecke/",
  },
  {
    text: "Working with Ibrahim has been a smooth experience—his expertise in React Native, project management, attention to detail, and clear communication make him highly reliable and efficient.",
    clientName: "Pedro Cruz",
    clientCountry: "Puerto Rico",
    clientRole: "Co-Founder @ MeshMap",
    clientImage: "https://i.ibb.co/9Lh59HQ/1710257378323.jpg",
    linkedin: "https://www.linkedin.com/in/pedrocruztech/",
  },
];

const Feedback = () => {
  return (
    <section
      className="pb-20 bg-gradient-lightgrey mt-20 pt-14"
      style={{ "--gradient-direction": "to bottom" }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-SfProDisplay-regular text-black mb-3">
            Testimonials
          </h1>
          <div className="w-28 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              // transition={{ duration: 0.5, delay: index * 0.1 }}
              transition={{
                duration: 1,
                delay: index * 0.12,
                ease: [0.16, 0.84, 0.44, 1],
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: [0.22, 0.61, 0.36, 0.4] },
              }}
              className="bg-white rounded-4xl transition-shadow duration-300 h-full border-2 border-[#E5E7EB]"
            >
              <div className="flex flex-col justify-between px-5 py-4 h-full">
                <div className="flex flex-col justify-between h-full">
                  <blockquote className="text-base md:text-xl italic mb-4 text-[#020817]">
                    "{feedback.text}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="relative inline-flex h-12 w-12 md:w-16 md:h-16 mr-4">
                      <Image
                        src={feedback.clientImage}
                        alt={feedback.clientName}
                        width={64} // same as md:w-16
                        height={64} // same as md:h-16
                        className="h-12 w-12 md:w-16 md:h-16 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow font-SfProDisplay-regular">
                      <p className=" text-[#1D1D11] text-base md:text-xl">
                        {feedback.clientName}
                      </p>
                      <p className="text-sm md:text-base text-[#839297]">
                        {feedback.clientRole}
                      </p>
                      <p className="text-sm md:text-base text-[#839297]">
                        {feedback.clientCountry}
                      </p>
                    </div>
                    {/* <a
                      href={feedback.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F0F0F0] rounded-full transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-black" />
                    </a> */}
                    <motion.a
                      href={feedback.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F0F0F0] rounded-full hover:bg-[#E0E0E0] transition-colors duration-300"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <Linkedin className="h-5 w-5 text-black" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <CTA title="See all the client feedbacks" buttonText="Lets Go" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
