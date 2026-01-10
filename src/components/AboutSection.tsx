import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-xl p-8 card-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Target className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              I am a Bachelor of Business Administration (BBA) final-year student 
              at Rayalaseema University, graduating in 2026. I am currently working 
              as a Digital Marketing & SEO Assistant, focusing on building strong 
              fundamentals in SEO and online marketing strategies. I am eager to 
              grow in a professional corporate environment and continuously upgrade 
              my skills.
            </p>
          </motion.div>

          {/* Education & Career */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-xl p-8 card-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <GraduationCap className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Bachelor of Business Administration (BBA)
                </h4>
                <p className="text-primary mb-1">Rayalaseema University</p>
                <p className="text-muted-foreground text-sm">
                  Expected Graduation: 2026
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-xl p-8 card-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Briefcase className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Career Goal</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                To establish a successful career in Digital Marketing and SEO, 
                leveraging data-driven strategies to help businesses grow their 
                online presence and achieve measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
