import { motion } from "framer-motion";
import "../App.css";

interface DotNavProps {
  sections: { id: string; label: string }[];
  activeSection: number;
  onDotClick: (index: number) => void;
}

const DotNav: React.FC<DotNavProps> = ({ sections, activeSection, onDotClick }) => {
  return (
    <motion.div
      className="dot-nav"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className={`dot-nav-item ${activeSection === index ? "active" : ""}`}
          onClick={() => onDotClick(index)}
          title={section.label}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: activeSection === index ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      ))}
    </motion.div>
  );
};

export default DotNav;
