import { Container, Box, Typography,Button } from '@mui/material'
import { motion, scale } from "framer-motion";

import BasicTimeline from "../components/TimeLine";
import Skill from "../components/Skill";
import Line from "../components/Line";
import Navbar  from '../components/Navbar';

import SubNav from "../assets/config/subMenu";

import { useRef} from "react";

  
  const Home: React.FC = () => {

    const MotionTypography = motion(Typography);
    const MotionBox = motion(Box as any)
    const MotionButton = motion(Button)

    const containerVariants = {
      hidden: {}, // ไม่กำหนดอะไร เพราะ parent เองไม่ต้อง animate
      show: {
        transition: {
          staggerChildren: 0.3, // ❗ ลูกแต่ละตัวดีเลย์ 0.3 วิ
        },
      },
    };
    
    const itemVariants = {
      hidden: { opacity: 0, y: -100 },   // เริ่มโปร่งใสและลอยขึ้น
      show: {
        opacity: 1,                      // กลายเป็นมองเห็น
        y: 0,                            // กลับมาที่ตำแหน่งเดิม
        transition: {
          type: "spring",                // ใช้เอฟเฟกต์สปริง
          stiffness: 100,
          damping: 10,
        },
      },
    };
    


    const skills = useRef([
      {
        name:'React',
        skill:'good',
        pic:'/image/React-icon.svg.png'
      },
      {
        name:'Vue',
        skill:'good',
        pic:'/image/Vue.js_Logo_2.svg.png'
      },
      {
        name:'Html/Css',
        skill:'good',
        pic:'/image/5968267.png'
      },
      {
        name:'JavaScript/TypeScript',
        skill:'good',
        pic:'/image/yuxa9EAfarIcX9EK8Ei1JSjwRnP7e0-metaanMtdHMuanBn-.jpg'
      },
      {
        name:'Bootstarp',
        skill:'good',
        pic:'/image/5968672.png'
      },
      {
        name:'Tailwind',
        skill:'good',
        pic:'/image/Tailwind_CSS_Logo.svg.png'
      },
      {
        name:'Material-ui',
        skill:'good',
        pic:'/image/mui-docs-icon-unplated.png'
      },
      {
        name:'Postman',
        skill:'good',
        pic:'/image/6934042159649_ac803d1cddbcbef8f110_512.png'
      },
      {
        name:'Git',
        skill:'good',
        pic:'/image/Git-Icon-1788C.png'
      },
    ])

    const education = useRef([
      {
        title:'Vocational Certificate - Eastern Technological College',
        subTitle:'Information Technology',
        years:'2016 - 2018'
      },
      {
        title:'High Vocational Certificate - Eastern Technological College',
        subTitle:'Information Technology',
        years:'2018 - 2020'
      },
    ])

    const experience = useRef([
      {
        title:' Front End Developer - Vocational Certificate',
        years:'2018',
        detail:[ 
          '-Developed basic websites using PHP,HTML, CSS, and Bootstrap',
          '-Managed databases using phpMyAdmin',
          '-Learned website development processes in a professional environment',
        ]
      },
      {
        title:'Front End Developer - High Vocational Certificate',
        years:'2019',
        detail:[
          '-Developed E-Commerce websites using Vue.js and Bootstrap',
          '-Designed web pages using HTML and CSS',
          '-Integrated backend systems and external APIs',
          '-Tested APIs using Postman',
          '-Managed data and databases via phpMyAdmin',
        ]
      },
      {
        title:'Front End Developer - Ottimo System',
        years:'Oct 2023 - Jan 2025',
        detail:[
          '-Developed and maintained frontend parts of company websites',
          '-Integrated frontend with backend systems via API',
          '-Improved UI/UX based on team feedback',
          '-Conducted initial functionality testing before QA handoff',
          '-Utilized Vue.js,HTML, CSS, JavaScript, and Postman'
        ]
      },
    ])

    const NavbarSetting = useRef<{name: string; link: string;}[]>(SubNav)
    

    return (
      <>
        <Navbar/>
        <Container maxWidth="xl">
          <Box className="flex flex-wrap w-full">
            <Box className="
              xl:w-1/2
              lg:w-1/2
              w-full
              lg:pb-5
              xl:pb-5
              flex
              justify-center
              lg:justify-start
              items-end
            "
            >
              <Box className="">
                <Box className="">
                  <MotionTypography 
                    initial={{opacity:0, y:-100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:0.4
                    }}
                    variant='h4' 
                    className='my-5' 
                    fontWeight={800}
                    sx={{
                    textAlign:{
                      xs:'center',
                      lg:'left'
                    }
                  }}>
                    Hello<span className='text-red-600'>.</span>
                  </MotionTypography>
                  <MotionTypography 
                    variant='h4' 
                    className='my-5'
                    initial={{opacity:0, y:-100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:0.5
                    }}
                    sx={{
                      textAlign:{
                        xs:'center',
                        lg:'left'
                      }
                    }}
                  >
                    <span className='text-red-600'>____</span>
                    I'm Napamonton  
                    <span className='text-red-600'>
                      (
                    </span>
                      Stang
                    <span className='text-red-600'>
                      )
                    </span>
                  </MotionTypography>
                  <MotionTypography 
                    variant='h3' 
                    className='my-5' 
                    fontWeight={800}
                    initial={{opacity:0, y:-100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:0.6
                    }}
                    sx={{
                      textAlign:{
                        xs:'center',
                        lg:'left'
                      }
                    }}
                  >
                    Front End Developer
                  </MotionTypography>
                </Box>
                <Box className="my-5"
                sx={{
                  textAlign:{
                    xs:'center',
                    lg:'start',
                  }
                }}
                >
                  <MotionButton 
                    initial={{opacity:0, y:-100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:0.7
                    }}
                    variant='contained' 
                    color='error' 
                    className='px-4 py-2 me-4'
                    sx={{ textTransform:'none' }}
                  >
                    My Project
                  </MotionButton>
                  <MotionButton 
                    initial={{opacity:0, y:-100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:0.8
                    }}
                    variant='outlined' 
                    color='error' 
                    className='px-4 py-2'  
                    sx={{ textTransform: 'none' }}
                  >
                    My Resume
                  </MotionButton>
                </Box>
              </Box>
            </Box>
            <MotionBox 
              className="
                xl:w-1/2 
                lg:w-1/2 
                w-full 
                items-end  
                justify-center 
                flex
              "
              initial={{opacity:0, scale:0}}
              whileInView={{opacity:1, scale:1}}
              transition={{
                type:'spring',
                stiffness:100,
                damping:10,
                delay:0.4
              }}
            >
              <img src="/image/porttest.png" alt="" className='w-[500px]'/>
            </MotionBox>
          </Box>  
        </Container>
        
        <MotionBox className="w-full bg-[#1c2d38]" id="nav" 
          initial={{opacity:0, x:100}}
          animate={{opacity:1, x:0}}
          transition={{
            type:'spring',
            stiffness:100,
            damping:10,
            delay:0.4
          }}
        >
          <Container maxWidth={'xl'} className='flex justify-between'>
            {
              NavbarSetting.current.map((e,i)=>(
                <Button className='p-4' key={i} href={e.link} > {e.name} </Button>
              ))
            }
          </Container>
        </MotionBox>

        <Container maxWidth={'xl'}>
          <section id="About">
            <Box className="mt-5 w-full" >
              <MotionTypography variant='h3' fontWeight={500} align='center'
                initial={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                  type:'spring',
                  stiffness:100,
                  damping:10,
                  delay:0.4
                }}
              >
                About Me
              </MotionTypography>
            </Box>
            <Box className="w-full">
              <Container>
                <MotionTypography variant='subtitle1' textAlign={'justify'} align='center'
                  initial={{opacity:0, y:-100}}
                  whileInView={{opacity:1, y:0}}
                  transition={{
                    type:'spring',
                    stiffness:100,
                    damping:10,
                    delay:0.5
                  }}
                >
                  I’m a frontend developer with 1–2 years of hands-on experience in Vue.js and 3 months of experience in user support as a Help Desk. 
                  I’m currently learning React.js and enjoy creating user-friendly interfaces using modern tools like MUI and Tailwind CSS. 
                  I’m passionate about improving my skills and building impactful web applications.
                </MotionTypography>
              </Container>
            </Box>
          </section>

            <Line/>      

          <section id="Experience">
            <MotionTypography variant='h3' fontWeight={500} align='center'
              initial={{opacity:0, y:-100}}
              whileInView={{opacity:1, y:0}}
              transition={{
                type:'spring',
                stiffness:100,
                damping:10,
                delay:0.4
              }}
            >
              Work Experiences
            </MotionTypography>
            <Box className="w-full flex flex-wrap">
              <MotionBox 
                className="w-full md:w-1/2"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
              >
                {
                  experience.current.map((e,i)=>(                                    
                    <MotionBox variants={itemVariants} key={i}>
                      <BasicTimeline                         
                        type={'Experiences'}
                        title={e.title}
                        detail={e.detail}
                        years={e.years}
                      />
                    </MotionBox>
                  ))
                }
              </MotionBox>
              <MotionBox className="w-full md:w-1/2 flex items-center"
                initial={{ opacity:0, scale:0}}
                whileInView={{ opacity:1, scale:1}}
                transition={{
                  type:'spring',
                  stiffness:100,
                  damping:10,
                  delay:0.4
                }}
              >
                <Box>
                  <img src="/image/workEx.jpg" alt=""className='rounded-2xl'/>
                </Box>
              </MotionBox>
            </Box>
          </section>

            <Line/>

          <section id='Education'>
            <Typography variant='h3' fontWeight={500} align='center'>
              Education
            </Typography>
            <Box className="flex flex-wrap">
              <MotionBox className="w-full md:w-1/2"
                initial={{ opacity:0 , scale:0 }}
                whileInView={{ opacity:1, scale:1 }}
                transition={{
                  type:'spring',
                  stiffness:100,
                  damping:10,
                  delay:0.4
                }}
              >
                <Box>
                  <img src="/image/school.jpg" alt="" className='rounded-2xl'/>
                </Box>  
              </MotionBox>

              <MotionBox
                className="w-full md:w-1/2"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
              >
                {
                  education.current.map((e,i)=>(
                    <MotionBox key={i} variants={itemVariants}>
                      <BasicTimeline                         
                        type={'Education'}
                        title={e.title}
                        subTitle={e.subTitle}                    
                        years={e.years}
                      />
                    </MotionBox>
                  ))
                }
              </MotionBox>
            </Box>
          </section>

            <Line/>

          <section id='skills'>
            <Typography variant='h3' fontWeight={500} align='center'>
              My Skills
            </Typography>
            <Box className="flex flex-wrap  justify-center"
            >
              {
                skills.current.map((e,i)=>(                  
                    <Skill
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: i * 0.1,
                      }}
                      key={i}                      
                      name={e.name}
                      skill={e.skill}
                      pic={e.pic}
                    />
                ))
              }
            </Box>
          </section>
          
          
          
          
        </Container>

      </>
    )
  }
  
  export default Home
  