import React from 'react';
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 950,
    height: 750,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

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
    <div>
    <h2>Our Services</h2>
      <div className={classes.root}>
        <ImageList rowHeight={180} className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
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
    </div>
  );
}
