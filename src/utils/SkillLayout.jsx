import { motion } from "framer-motion";

const SkillLayout = ({ skills, heading, }) => {


    return (
        <div className="">
            {/* heading...*/}
            <h3 className="text-[20px] lg:text-[32px] text-white font-bold font-rajdhani leading-10.5 lg:capitalize uppercase text-center lg:text-left ">{heading}  </h3>

            <div className="">

                {skills.map((skill) => {
                    return (
                        <div
                            key={skill.id}
                            className="mt-5 lg:mt-7.5">
                            {/*name +label container... */}
                            <div className="flex justify-between items-center mb-3 lg:mb-3.75 ">
                                <span className="text-xs lg:text-sm text-white font-medium font-rajdhani  leading-[120%] lg:leading-[150%]  uppercase tracking-wider "> {skill.name} </span>
                                <span className="text-xs lg:text-sm text-white font-medium font-rajdhani  leading-[120%] lg:leading-[150%] ">{skill.label}  </span>
                            </div>
                            {/* progress bar... default progress bar + active progress bar */}
                            <div className="w-full bg-[#9999993e] h-2 rounded-xl">
                                <motion.div
                                    initial={{ width: 0 }}
                                    viewport={{ once: true }}
                                    whileInView={{ width: skill.label }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className=" h-full bg-[#ff014f] rounded-xl "
                                >
                                </motion.div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default SkillLayout;
