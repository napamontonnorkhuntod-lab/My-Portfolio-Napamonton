import { useState } from "react";
import { Typography,Box } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";



interface timeLineProps{
    type:string,
    title:string,
    subTitle?:string,        
    detail?:string[],
    years:string,
}


const BasicTimeline:React.FC<timeLineProps> = (props) => {

    const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <>
        <Box width={'100%'}>

            <Timeline
                position={props.type === 'Education' ? 'alternate': undefined}

                sx={
                    props.type !== 'Education' ? 
                    {
                        [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        },
                    } : undefined
                }
            >
                <TimelineItem>

                    {
                        props.type === 'Education' && 
                        (
                            <TimelineOppositeContent

                                sx={{ m: '0' }}
                                align="right"
                                variant="body2"
                                color="text.error"
                            >
                                {props.years}
                            </TimelineOppositeContent>
                        )
                    }
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
                        <Typography variant="h6" component="span" >
                            {/* {props.title ?? ''} */}
                            { props.type === 'Education' ? `${props.title ?? ''}`: `${props.title} - ( ${props.years ?? ''} )` }
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