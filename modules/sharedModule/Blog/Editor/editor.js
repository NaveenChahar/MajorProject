import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './editor.css'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  input: {
      display:'none'
  }
}));

 const data={ 
     subParaHeading:null,
     paraData:null,
     subImageHeading:null,
     imageData:null,
     subVLHeading:null,
     videoLinkdata:null
    };

function clearData(){
    data.subParaHeading=null;
    data.paraData=null;
    data.subImageHeading=null;
    data.imageData=null;
    data.subVLHeading=null;
    data.videoLinkdata=null
}

export default function EditorComponent(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const inputhandleChange=input=>event=>{  //handle the change in the textfields
      data[input] = event.target.value;
      //console.log(input, data[input])
    }
    const filehandleChange=(selectorFiles)=>{  //handle the change in the image file
        console.log(selectorFiles);
        data.imageData=selectorFiles;
    }

  const add=(number)=>{
    if(number==0){
        //add paragraph
        //check for null values in main data
        //clear the data object
        console.log('here',data)
        if(data.paraData!=null){
            let obj={
                priority:null,
                type:'PR',
                subHeading:data.subParaHeading,
                data:data.paraData
            }
            props.handleEditor(obj)
        }
        else{
            alert('Please enter data before adding')
        }
        clearData();
        console.log('here',data)
        //call the props method from here passing unique arguments
        //props.handleEditor()
    }
    else if(number==1){
        //add image
        console.log('here',data)
        if(data.imageData!=null){
            let obj={
                priority:null,
                type:'IM',
                subHeading:data.subImageHeading,
                data:data.imageData
            }
            props.handleEditor(obj)
        }
        else{
            alert('Please enter data before adding')
        }
        clearData();
        console.log('here',data)
    }
    else{
        //add link
        console.log('here',data)
        if(data.videoLinkdata!=null){
            let obj={
                priority:null,
                type:'VL',
                subHeading:data.subVLHeading,
                data:data.videoLinkdata
            }
            props.handleEditor(obj)
        }
        else{
            alert('Please enter data before adding')
        }
        clearData();
        console.log('here',data)

    }
}

  return (
      <div className={classes.root} style={{ width: '100%' }}>
          <AppBar position="static" color="default">
              <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
              >
                  <Tab label="Add Paragraph" {...a11yProps(0)} />
                  <Tab label="Add Image" {...a11yProps(1)} />
                  <Tab label="Add VideoLink" {...a11yProps(2)} />
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
              <TextField
                  id="standard-multiline-static"
                  label="Enter SubHeading For Paragraph"
                  multiline
                  className="textField"
                  rows="2"
                  onChange={inputhandleChange('subParaHeading')}
                  margin="normal"
              />
              <TextField
                  id="standard-multiline-static"
                  label="Enter Paragraph Information"
                  multiline
                  className="textField"
                  rows="6"
                  onChange={inputhandleChange('paraData')}
                  margin="normal"
              />
              <Button color="primary" variant="contained" onClick={()=>add(0)}
                   style={{margin:'20px'}}>
                  ADD
              </Button>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <TextField
                  id="standard-multiline-static"
                  label="Enter SubHeading For Image"
                  multiline
                  className="textField"
                  rows="2"
                  onChange={inputhandleChange('subImageHeading')}
                  margin="normal"
              />
              <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  onChange={(e)=>filehandleChange(e.target.files)}
                  type="file"
              />
              <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span"
                     style={{ width: '40%', margin: '10px 0px' }}>
                      Upload
                  </Button>
              </label>
              <br/>
              <Button color="primary" variant="contained" onClick={() => add(1)}
                  style={{ margin: '20px' }}>
                  ADD
              </Button>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
              <TextField
                  id="standard-multiline-static"
                  label="Enter SubHeading For VideoLink"
                  multiline
                  className="textField"
                  rows="2"
                  onChange={inputhandleChange('subVLHeading')}
                  margin="normal"
              />
              <TextField
                  id="standard-multiline-static"
                  label="Enter VideoLink"
                  multiline
                  className="textField"
                  rows="2"
                  onChange={inputhandleChange('videoLinkdata')}
                  margin="normal"
              />
              <Button color="primary" variant="contained" onClick={() => add(2)}
                  style={{ margin: '20px' }}>
                  ADD
              </Button>
          </TabPanel>

      </div>
  );
}