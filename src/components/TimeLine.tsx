
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
                                    m: '5px 0',
                                }}
                            />
                            <TimelineConnector
                                sx={{
                                    height: '14px',
                                    minHeight: '14px',
                                }}
                            />
                        </TimelineSeparator>

                        <TimelineContent sx={{ py: '0px', px: 2, pb: 1 }}>
                            <Typography variant="body1" component="span" sx={{ width: '100%', fontWeight: 'bold', fontSize: '1.05rem', display: 'inline-block', lineHeight: 1.3, mb: 0.3 }}>
                                {props.type === 'Education' ? `${props.title ?? ''}` : props.title}
                            </Typography>
                            <Typography variant="body2" component="span" sx={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', mb: 0.5, lineHeight: 1.2 }}>
                                ( {props.years ? props.years : '-'} )
                            </Typography>
                            <Typography variant='body2' component="div" sx={{ fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                                {
                                    props.type === 'Education' ?
                                        (
                                             props.subTitle
                                        ) : (
                                            <Box component="ul" sx={{ m: 0, pl: 2.5, listStyleType: 'disc' }}>
                                                {props.detail?.map((e, i) => (
                                                    <Box component="li" key={i} sx={{ mb: 0.4, color: '#f9be1d' }}>
                                                        <Typography variant="body2" sx={{ fontSize: '0.925rem', lineHeight: 1.55, color: '#e2e8f0' }}>
                                                            {e}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>
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