import { useState } from 'react'; // ✅ ถูกต้อง
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import type { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface CardComponentProps {
  title:string;
  subTitle:string;
  image: string;
  detail:string;
  favor:boolean;
  idData:number;
  checkStatus:() => void
  delData:(id:number)=> void
}



const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
}));

export default function CardComponent(props:CardComponentProps) {  

  const navigate = useNavigate()
  
  const [anchorElMoreVert, setAnchorElMoreVert] = useState<null | HTMLElement>(null);


  const handleCloseMoreVertMenu = () => {
    setAnchorElMoreVert(null);
  };

  return (
    <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2'>
      <div className='cursor-pointer' onClick={()=>{
        navigate(`/user/${props.idData}`)
      }}>
        <Card>        
          <CardHeader
            avatar={              
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
            }
            action={
              <>
                <IconButton aria-label="settings"
                  onClick={(e)=> {
                    setAnchorElMoreVert(e.currentTarget);
                    e.stopPropagation();
                  }}    
                >
                  <MoreVertIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorElMoreVert} // จุดอ้างอิง
                    open={Boolean(anchorElMoreVert)} // เปิด ปิด
                    onClose={handleCloseMoreVertMenu} // กดข้างนอกปิด
                    onClick={(e)=> {e.stopPropagation()}} //ไม่ให้ฟังชั่นอื่นทำงาน
                    sx={{ mt: '45px' }}
                    id="menu-appbar"                    
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}               
                >
                    <MenuItem 
                      onClick={()=>{
                        navigate(`/user/edit/${props.idData}`);
                      }}                      
                    >
                      แก้ไข
                    </MenuItem>   
                    <MenuItem 
                      onClick={()=>{
                        props.delData(props.idData)
                      }}                      
                    >
                      ลบ
                    </MenuItem>                  
                </Menu>
              </>
            }
            title={props.title}
            subheader={props.subTitle}
            className='card-title-span'          
          />

          <CardMedia
            component="img"
            height="194"
            image={props.image}
            alt="Paella dish"
          />

          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} className='line-clamp-3 h-[60px]'>
              {props.detail}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton 
              aria-label="add to favorites"        
              onClick={(e)=> {
                props.checkStatus();
                e.stopPropagation();
              }}     
            >
                {
                  props.favor 
                    ? <FavoriteIcon color='error' />
                    : <FavoriteBorder/>
                }
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
