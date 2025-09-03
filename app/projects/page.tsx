"use client";

import React from "react";
import { motion } from "motion/react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";

const ProjectListPage = () => {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      <motion.div
        key={pathname} // 👈 here
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
          My works
        </motion.h2>

        {/* your grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid xl:grid-cols-3 sm:grid-cols-2 my-10 gap-5"
        >
          {workData.map((project, index) =>
          project.type === "web" ? (
            <a
              key={index}
              href={project.url} // add url field in your workData
              target="_blank" // open in new tab
              rel="noopener noreferrer" // security best practice
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={
                  "aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                }
                style={{
                  backgroundImage: `url(${project.bgImage})`,
                }}
              >
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                  <div className="min-w-0 flex-1 pr-4">
                    {/* allows text to shrink, respects icon */}
                    <h2 className="font-semibold truncate">{project.title}</h2>
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition shrink-0">
                    <Image src={assets.send_icon} alt="" className="w-5" />
                  </div>
                </div>
              </motion.div>
            </a>
          ) : (
            <Link href={`/project/${index}`} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={
                  "aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                }
                style={{
                  backgroundImage: `url(${project.bgImage})`,
                }}
              >
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                  <div className="min-w-0 flex-1 pr-4">
                    {/* allows text to shrink, respects icon */}
                    <h2 className="font-semibold truncate">{project.title}</h2>
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition shrink-0">
                    <Image src={assets.send_icon} alt="" className="w-5" />
                  </div>
                </div>
              </motion.div>
            </Link>
          )
        )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectListPage;
