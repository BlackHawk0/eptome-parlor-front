import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import './About.css'
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // width: 900,
    // height: 750,
  },
  imageList: {
    flexWrap: 'nowrap',
    width: 850,
    height: 250,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const staff = [
    {
      "img": "https://img.freepik.com/free-photo/front-view-young-female-hairdresser-white-t-shirt-black-cape-with-brushes-hairdryer-holding-scissors-posing_140725-15418.jpg?size=626&ext=jpg&ga=GA1.2.790298598.1667807727&semt=sph", 
      "title":"Mary" },
    {
        "img": "https://img.freepik.com/free-photo/front-view-young-female-hairdresser-white-t-shirt-black-cape-with-brushes-hairdryer-holding-scissors-posing_140725-15418.jpg?size=626&ext=jpg&ga=GA1.2.790298598.1667807727&semt=sph",
        "title": "Anne"
    },
    {
        "img": "https://img.freepik.com/free-photo/front-view-young-female-hairdresser-white-t-shirt-black-cape-with-brushes-hairdryer-holding-scissors-posing_140725-15418.jpg?size=626&ext=jpg&ga=GA1.2.790298598.1667807727&semt=sph",
        "title": "Jane"
    },
    {
      "img": "https://img.freepik.com/free-photo/front-view-young-female-hairdresser-white-t-shirt-black-cape-with-brushes-hairdryer-holding-scissors-posing_140725-15418.jpg?size=626&ext=jpg&ga=GA1.2.790298598.1667807727&semt=sph",
      "title": "Jane"
  },
  {
    "img": "https://img.freepik.com/free-photo/front-view-young-female-hairdresser-white-t-shirt-black-cape-with-brushes-hairdryer-holding-scissors-posing_140725-15418.jpg?size=626&ext=jpg&ga=GA1.2.790298598.1667807727&semt=sph",
    "title": "Jane"
}
]

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className='about-div'>
      <Typography variant="h4" align='center' sx={{ my: 2 }}>
      Our Experienced Specialists
      </Typography>
      <br /> <br />
      <Typography variant="body2" align='center' sx={{ my: 2 }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
      </Typography>
      <br /> <br />
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {staff.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  {/* <StarBorderIcon className={classes.title} /> */}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
}
