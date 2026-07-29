import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

interface SkillProps {
  name: string;
  skill: string;
  pic: string;
}

type MotionSkillProps = SkillProps & MotionProps;

const MotionBox = motion(Box);

const Skill: React.FC<MotionSkillProps> = ({ name, pic, ...motionProps }) => {
  return (
    <MotionBox
      {...motionProps}
      className="w-full"
    >
      <Box
        className="bg-[#1C2D38] p-4 hover:bg-[#f9be1dcc] flex items-center justify-center transition-colors duration-300"
        height={150}
        borderRadius={4}
      >
        <Box className="flex flex-col justify-center items-center">
          <Box className="w-full max-w-[60px] mx-auto">
            <img src={pic} alt={`${name} icon`} className="object-contain w-full h-full" />
          </Box>

          <Typography variant="body2" align="center" className="mt-2" sx={{ fontSize: '0.8rem' }}>
            {name}
          </Typography>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default Skill;
