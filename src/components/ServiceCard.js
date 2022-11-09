import React from 'react';
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 700,
    height: 650,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

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
export default function TitlebarImageList() {
  const [serviceTypes, setServiceType] = useState([]);

  const serviceTypeAPI = "https://eptome-parlor.herokuapp.com/service_types";
  
  useEffect(() => {
      fetch (serviceTypeAPI)
          .then(res => res.json())
          .then(serviceType => setServiceType(serviceType))
  }
  , [])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Our Services</ListSubheader>
        </ImageListItem>
        {serviceTypes.map((serviceType) => (
          <ImageListItem key={serviceType.imageURL}>
            <img src={serviceType.imageURL} alt={serviceType.service_type_name} />
            <ImageListItemBar
              title={serviceType.service_type_name}
              subtitle={<span>Description: {serviceType.service_type_description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${serviceType.service_type_name}`} className={classes.icon}>
                  {/* <InfoIcon /> */}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
