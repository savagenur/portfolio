"use client";
import Navbar from "@/app/components/Navbar";
import { workData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import { use } from "react";

type ProjectDetailPageProps = { params: Promise<{ id: string }> };

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const { id } = use(params);
  const projectId = parseInt(id, 10); // from URL
  const project = workData[projectId]; // get the project

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }} // 👈 use animate instead of whileInView
        transition={{ duration: 1 }}
        className="w-full px-[12%] py-10 scroll-mt-20 pt-28"
      >
        <motion.h2
          animate={{ opacity: 1 }}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-ovo"
        >
          {project.title}
        </motion.h2>

        {/* your grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 my-10 gap-5 "
        >
          {project.images?.map((image) => (
            <div
              key={image}
              className="flex justify-center items-center" // center image
            >
              <Image
                src={image}
                alt="Item"
                className="rounded-2xl"
                width={150} // base size
                height={100}
                style={{ width: "auto", height: "auto", maxWidth: "100%" }}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectDetailPage;
