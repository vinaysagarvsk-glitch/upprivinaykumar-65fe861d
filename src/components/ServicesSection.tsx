import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Target, Share2 } from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    description:
      "Improving website visibility through foundational SEO techniques including on-page optimization, meta tags, and content structure.",
    icon: Search,
  },
  {
    title: "Keyword Research",
    description:
      "Identifying relevant keywords to improve search performance and drive targeted organic traffic to your website.",
    icon: Target,
  },
  {
    title: "Social Media Marketing",
    description:
      "Supporting brand presence and engagement on social platforms through strategic content and community management.",
    icon: Share2,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-xl p-8 card-shadow h-full border border-transparent hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-primary-foreground" size={32} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
