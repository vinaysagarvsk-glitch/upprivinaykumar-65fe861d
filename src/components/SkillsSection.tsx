import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Target, TrendingUp, Share2, BarChart3 } from "lucide-react";

const skills = [
  {
    name: "SEO Basics",
    icon: Search,
    level: 75,
    description: "Understanding of core SEO principles",
  },
  {
    name: "Keyword Research",
    icon: Target,
    level: 80,
    description: "Finding relevant keywords for content optimization",
  },
  {
    name: "SEO Optimization",
    icon: TrendingUp,
    level: 70,
    description: "On-page and technical SEO implementation",
  },
  {
    name: "Social Media Marketing",
    icon: Share2,
    level: 65,
    description: "Brand presence and engagement strategies",
  },
  {
    name: "Digital Marketing Fundamentals",
    icon: BarChart3,
    level: 70,
    description: "Core principles of online marketing",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 card-shadow group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {skill.description}
              </p>

              {/* Progress bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="h-full bg-gradient-primary rounded-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
