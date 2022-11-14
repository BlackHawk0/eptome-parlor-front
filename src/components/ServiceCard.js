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

    <div class="grid grid-cols-2 gap-4 dark:bg-slate-900">


      <div class="flex font-sans dark:bg-slate-900">
        <div class="flex-none w-72 relative">
          <img src="https://img.freepik.com/free-photo/tender-african-woman-relaxing-enjoying-healthy-spa-massage-with-oil_176420-13958.jpg?size=338&ext=jpg&ga=GA1.2.790298598.1667807727" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <form class="flex-auto p-6 w-72">
          <div class="flex-column flex-wrap border-b w-56">
            <div>
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              Full Body Massage
            </h1>
            </div>
            <div class="text-lg font-semibold text-slate-500">
              Ksh3000.00
            </div>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              Description
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div class="space-x-2 flex text-sm">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laborum doloremque eius possimus </p>
            </div>
          </div>
          <div class="flex space-x-4 mb-6 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-md text-white bg-sky-500 hover:bg-sky-700" type="submit">
                Book now
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
        </form>
      </div>


      {serviceTypes.map((serviceType) => (
      <div class="flex font-sans dark:bg-slate-900">
      <div class="flex-none w-72 relative">
          <img src={serviceType.imageURL} loading="lazy" />
        </div>
        <form class="flex-auto p-6 w-72">
          <div class="flex-column flex-wrap border-b w-56">
            <div>
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
            {serviceType.service_type_name}
            </h1>
            </div>
            <div class="text-lg font-semibold text-slate-500">
              Ksh3000.00
            </div>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              Description
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div class="space-x-2 flex text-sm">
              <p> {serviceType.service_type_description}</p>
            </div>
          </div>
          <div class="flex space-x-4 mb-6 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-md text-white bg-sky-500 hover:bg-sky-700" type="submit">
                Book now
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>     
          </div>
        </form>
      </div>
      ))}
      </div>
    </div>
  );
}


