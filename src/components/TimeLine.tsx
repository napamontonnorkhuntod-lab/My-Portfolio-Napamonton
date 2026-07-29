
import { Typography, Box } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';




interface timeLineProps {
    type: string,
    title: string,
    subTitle?: string,
    detail?: string[],
    years: string,
}


const BasicTimeline: React.FC<timeLineProps> = (props) => {



    return (
        <>
            <Box width={'100%'}>

                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                        p: 0,
                        m: 0,
                    }}
                >
                    <TimelineItem sx={{ minHeight: 'auto' }}>
                        <TimelineSeparator>
                            <TimelineDot color='error'
                                sx={{
                                    width: '12px',
                                    height: '12px',
                                    m: '4px 0',
                                }}
                            />
                            <TimelineConnector
                                sx={{
                                    height: '15px',
                                    minHeight: '15px',
                                }}
                            />
                        </TimelineSeparator>

                        <TimelineContent sx={{ py: '0px', px: 2, pb: 1 }}>
                            <Typography variant="body1" component="span" sx={{ width: '100%', fontWeight: 'bold', fontSize: '1rem', display: 'inline-block', lineHeight: 1.2, mb: 0.5 }}>
                                {props.type === 'Education' ? `${props.title ?? ''}` : props.title}
                            </Typography>
                            <Typography variant="body2" component="span" sx={{ display: 'block', fontSize: '0.85rem', color: 'gray', mb: 0.5, lineHeight: 1.2 }}>
                                ( {props.years ? props.years : '-'} )
                            </Typography>
                            <Typography variant='body2' component="div" sx={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                                {
                                    props.type === 'Education' ?
                                        (
                                            props.subTitle
                                        ) : (
                                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                                {props.detail?.map((e, i) => (
                                                    <li key={i}>
                                                        <Typography variant="body2" sx={{ fontSize: '0.85rem', lineHeight: 1.3 }}>{e}</Typography>
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