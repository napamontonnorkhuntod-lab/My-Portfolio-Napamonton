import { Container, Box, Typography, CssBaseline,Button } from '@mui/material'


import Navbar from "../components/Navbar";
import BasicTimeline from "../components/TimeLine";
import Skill from "../components/Skill";
import Line from "../components/Line";

import SubNav from "../assets/config/subMenu";

import { useRef} from "react";

  
  const Home: React.FC = () => {


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
                  <Typography variant='h4' className='my-5' fontWeight={800}sx={{
                    textAlign:{
                      xs:'center',
                      lg:'left'
                    }
                  }}>
                    Hello<span className='text-red-600'>.</span>
                  </Typography>
                  <Typography variant='h4' className='my-5'
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
                  </Typography>
                  <Typography variant='h3' className='my-5' fontWeight={800}
                    sx={{
                      textAlign:{
                        xs:'center',
                        lg:'left'
                      }
                    }}
                  >
                    Front End Developer
                  </Typography>
                </Box>
                <Box className="my-5"
                sx={{
                  textAlign:{
                    xs:'center',
                    lg:'start',
                  }
                }}
                >
                  <Button 
                    variant='contained' 
                    color='error' 
                    className='px-4 py-2 me-4'
                    sx={{ textTransform:'none' }}
                  >
                    My Project
                  </Button>
                  <Button 
                    variant='outlined' 
                    color='error' 
                    className='px-4 py-2'  
                    sx={{ textTransform: 'none' }}
                  >
                    My Resume
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className="
              xl:w-1/2 
              lg:w-1/2 
              w-full 
              items-end  
              justify-center 
              flex

              ">
              <img src="/image/porttest.png" alt="" className='w-[500px]'/>
            </Box>
          </Box>  
        </Container>
        
        <Box className="w-full bg-[#1c2d38]" id="nav">
          <Container maxWidth={'xl'} className='flex justify-between'>
            {
              NavbarSetting.current.map((e,i)=>(
                <Button className='p-4' key={i} href={e.link} > {e.name} </Button>
              ))
            }
          </Container>
        </Box>

        <Container maxWidth={'xl'}>
          <section id="About">
            <Box className="mt-5 w-full" >
              <Typography variant='h3' fontWeight={500} align='center'>
                About Me
              </Typography>
            </Box>
            <Box className="w-full">
              <Container>
                <Typography variant='subtitle1' textAlign={'justify'} align='center'>
                  I’m a frontend developer with 1–2 years of hands-on experience in Vue.js and 3 months of experience in user support as a Help Desk. 
                  I’m currently learning React.js and enjoy creating user-friendly interfaces using modern tools like MUI and Tailwind CSS. 
                  I’m passionate about improving my skills and building impactful web applications.
                </Typography>
              </Container>
            </Box>
          </section>

            <Line/>      

          <section id="Experience">
            <Typography variant='h3' fontWeight={500} align='center'>
              Work Experiences
            </Typography>
            <Box width={'100%'}>
              {
                experience.current.map((e,i)=>(                                    
                  <BasicTimeline 
                    key={i}
                    type={'Experiences'}
                    title={e.title}
                    detail={e.detail}
                    years={e.years}
                  />
                ))
              }
            </Box>
          </section>

            <Line/>

          <section id='Education'>
            <Typography variant='h3' fontWeight={500} align='center'>
              Education
            </Typography>
            <Box width={'100%'}>
              {
                education.current.map((e,i)=>(
                  <BasicTimeline 
                    key={i}
                    type={'Education'}
                    title={e.title}
                    subTitle={e.subTitle}                    
                    years={e.years}
                  />
                ))
              }
            </Box>
          </section>

            <Line/>

          <section id='skills'>
            <Typography variant='h3' fontWeight={500} align='center'>
              My Skills
            </Typography>
            <Box width={'w-full'} className="flex flex-wrap  justify-center">
              {
                skills.current.map((e,i)=>(
                  <Skill
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
  