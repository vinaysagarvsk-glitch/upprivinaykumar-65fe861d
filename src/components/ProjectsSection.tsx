import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, FolderOpen, TrendingUp } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-xl p-8 md:p-12 card-shadow text-center">
            <div className="flex justify-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <FolderOpen className="text-primary" size={28} />
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center glow">
                <Rocket className="text-primary-foreground" size={28} />
              </div>
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <TrendingUp className="text-primary" size={28} />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4">
              Building & Learning
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Currently gaining hands-on experience through internship-based 
              learning and practical SEO tasks. Projects will be added as I 
              continue to grow professionally and complete meaningful work.
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                🚀 Stay tuned for upcoming projects!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
