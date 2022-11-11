import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import './About.css'
import '../index.css'
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
        "img": "https://images.unsplash.com/photo-1553521041-d168abd31de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFpciUyMGRyZXNzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "title": "Tom"
    },
    {
        "img": "https://media.istockphoto.com/id/1398386378/photo/portrait-of-hairdresser-with-dye-hair-at-hair-salon.jpg?b=1&s=170667a&w=0&k=20&c=OIzsJumKlIzunbTP4XlFYAcf1wZygcDFBrkAPkQZ_P8=",
        "title": "Jane"
    },
    {
      "img": "https://media.istockphoto.com/id/1365608023/photo/shot-of-a-handsome-young-barber-standing-alone-in-his-salon.jpg?b=1&s=170667a&w=0&k=20&c=pxeqhIkM--YoZn2HQyrlWWO60QPKo-nmMvU92YWbOhc=",
      "title": "Alex"
  },
  {
    "img": "https://media.istockphoto.com/id/1305586787/photo/portrait-of-asian-women-hair-stylish-business-owner-standing-and-smile-inside-of-hair-salon.jpg?b=1&s=170667a&w=0&k=20&c=dmeYPVsdW499ALpsNf0cKPBy3IyLh1-cTSsiPYsPkEM=",
    "title": "Lee"
}
]
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className='about-div'>
      <Typography variant="h4" align='center' className='about-h'>
      Our Experienced Specialists
      </Typography>
      <br /> <br />
      <Typography variant="body2" align='center' className='about-p'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat explicabo quasi saepe commodi facilis fuga deserunt deleniti minima. Minus harum fugit enim? Nesciunt hic, accusamus corporis ab ducimus expedita debitis aspernatur facere reprehenderit est veritatis sed! Ipsum ducimus minima ullam pariatur aspernatur, dolorem natus atque magni nostrum exercitationem quo aut aliquid temporibus harum expedita obcaecati? Aut eveniet officiis veniam numquam fugiat, sapiente ex. Cupiditate quod aliquid optio fuga aspernatur delectus eos necessitatibus aut expedita! Recusandae aperiam explicabo quae ratione, sequi, autem saepe, dignissimos reprehenderit itaque dolorum sed fugit molestias. Eaque eligendi quis reprehenderit soluta. Eaque cum quibusdam eius ducimus iusto provident accusantium ipsam nostrum dolorem, exercitationem ut! Facere, molestiae amet alias nisi provident unde excepturi, ducimus porro aspernatur ex debitis quisquam neque optio cum voluptatum, minus eos error incidunt temporibus repellendus! Magnam 
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
      <a
        href="https://wa.me/254705719678"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}
