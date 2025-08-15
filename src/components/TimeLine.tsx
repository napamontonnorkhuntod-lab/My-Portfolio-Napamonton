
import { Typography,Box } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';




interface timeLineProps{
    type:string,
    title:string,
    subTitle?:string,        
    detail?:string[],
    years:string,
}


const BasicTimeline:React.FC<timeLineProps> = (props) => {



  return (
    <>
        <Box width={'100%'}>

            <Timeline
                sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                }}
            >
                <TimelineItem>

                    <TimelineSeparator>
                        <TimelineDot  color='error' 
                            sx={{
                                width:'20px',
                                height:'20px',
                            }}
                        /> 
                        <TimelineConnector 
                            sx={{
                                height:'100px'
                            }}
                        />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: '0px', px: 2 }}>
                        <Typography variant="h6" component="span" sx={{width:'100%'}}>
                            {/* {props.title ?? ''} */}
                            { props.type === 'Education' ? `${props.title ?? ''}`: props.title }
                        </Typography>
                        <br />
                            <Typography variant="h6" component="span"> 
                                ( {props.years ? props.years : '-'} )
                            </Typography>
                        <Typography variant='subtitle1'>
                            {
                                props.type === 'Education' ? 
                                (
                                    props.subTitle
                                ) : (
                                    <ul>
                                        {props.detail?.map((e,i)=>(
                                            <li key={i}>
                                                <Typography variant="subtitle1">{e}</Typography>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }    
                        </Typography>          
                    </TimelineContent>

                </TimelineItem>
                
            </Timeline>
        </Box>
    </> 
  );
}
export default BasicTimeline