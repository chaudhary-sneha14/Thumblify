import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
    return (
        <section id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle 
                text1="Contact" 
                text2="Grow your channel" 
                text3="Have questions about our AI? Ready to scale your views? Let's talk." 
            />
            
            <form onSubmit={(e) => e.preventDefault()} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full'>
                
                {/* Name Input */}
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Your name</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-violet-500 bg-transparent'>
                        <UserIcon className='size-5 text-slate-500' />
                        <input name='name' type="text" placeholder='Enter your name' className='w-full p-3 bg-transparent outline-none' />
                    </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Email id</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-violet-500 bg-transparent'>
                        <MailIcon className='size-5 text-slate-500' />
                        <input name='email' type="email" placeholder='Enter your email' className='w-full p-3 bg-transparent outline-none' />
                    </div>
                </motion.div>

                {/* Message Textarea */}
                <motion.div className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Message</p>
                    <textarea 
                        name='message' 
                        rows={8} 
                        placeholder='Enter your message' 
                        className='focus:border-violet-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700 bg-transparent' 
                    />
                </motion.div>

                {/* Submit Button */}
                <motion.button 
                    type='submit' 
                    className='w-max flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-10 py-3 rounded-full transition-colors active:scale-95'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Submit
                    <ArrowRightIcon className="size-5" />
                </motion.button>
            </form>
        </section>
    );
}