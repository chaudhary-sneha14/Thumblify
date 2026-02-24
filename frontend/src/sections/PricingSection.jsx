import SectionTitle from "../components/SectionTitle"
import { pricingData } from "../data/pricing";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
    return (
        <section id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle 
                text1="Pricing" 
                text2="Simple Pricing" 
                text3="Choose the plan that fits your creation schedule. Cancel anytime." 
            />

            <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                {pricingData.map((plan, index) => (
                    <motion.div 
                        key={index} 
                        className={`w-72 text-center border border-violet-950 p-6 pb-16 rounded-xl ${
                            plan.mostPopular ? 'bg-violet-950 relative scale-105 shadow-xl' : 'bg-violet-950/30'
                        }`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: index * 0.15, 
                            type: "spring", 
                            stiffness: 320, 
                            damping: 70, 
                            mass: 1 
                        }}
                    >
                        {/* Most Popular Badge */}
                        {plan.mostPopular && (
                            <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-violet-400 text-white rounded-full font-medium">
                                Most Popular
                            </p>
                        )}

                        <p className="font-semibold text-white">{plan.name}</p>
                        
                        <h1 className="text-3xl font-semibold text-white mt-2">
                            ${plan.price}
                            <span className="text-gray-500 font-normal text-sm">/{plan.period}</span>
                        </h1>

                        {/* Features List */}
                        <ul className="list-none text-slate-300 mt-6 space-y-2">
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-2">
                                    <CheckIcon className="size-4 text-violet-600 shrink-0" />
                                    <p className="text-sm">{feature}</p>
                                </li>
                            ))}
                        </ul>

                        {/* Action Button */}
                        <button 
                            type="button" 
                            className={`w-full py-2.5 rounded-md font-medium mt-7 transition-all active:scale-95 ${
                                plan.mostPopular 
                                    ? 'bg-white text-violet-600 hover:bg-slate-200' 
                                    : 'bg-violet-600 text-white hover:bg-violet-700'
                            }`}
                        >
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}