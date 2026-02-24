import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
    const navigate = useNavigate();

    return (
        <section className="px-4">
            <motion.div 
                className="max-w-5xl py-16 mt-40 md:pl-20 md:w-full md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left bg-gradient-to-b from-violet-900 to-violet-950 rounded-2xl p-6 text-white"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div>
                    <motion.h1 
                        className="text-4xl md:text-[46px] md:leading-[1.2] font-semibold bg-gradient-to-r from-white to-violet-400 text-transparent bg-clip-text"
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                    >
                        Ready to go viral?
                    </motion.h1>
                    <motion.p 
                        className="bg-gradient-to-r from-white to-violet-400 text-transparent bg-clip-text text-lg mt-2"
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                    >
                        Join thousands of creators using AI to boost their CTR.
                    </motion.p>
                </div>

                <motion.button 
                    onClick={() => navigate("/generate")} 
                    className="px-12 py-3 text-slate-800 bg-white hover:bg-slate-200 rounded-full text-sm font-medium transition-colors active:scale-95 shrink-0 md:mr-10"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Generate Free Thumbnail
                </motion.button>
            </motion.div>
        </section>
    );
}