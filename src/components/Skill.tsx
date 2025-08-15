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

const Skill: React.FC<MotionSkillProps> = ({ name, skill, pic, ...motionProps }) => {
  return (
    <MotionBox
      {...motionProps}
      className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-3 justify-center"
    >
      <Box
        className="bg-[#1C2D38] p-5 hover:bg-[#f9be1dcc] flex items-center justify-center"
        height={276}
        borderRadius={5}
      >
        <Box className="flex flex-col justify-center">
          <Box className="w-full max-w-[100px] mx-auto">
            <img src={pic} alt="Skill Icon" className="object-cover w-full h-full" />
          </Box>

          <Typography variant="subtitle1" align="center" className="mt-5">
            {name}
          </Typography>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default Skill;
