import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

// Importing the tab components
import Owntab from "./Owntab";
import Renttab from "./Renttab";
import { pink } from '@mui/material/colors';

function Tabitem() {
  return (
    <div className="flex flex-col items-center">
      <Tabs defaultValue={0} className='w-full max-w-6xl '>
        <TabsList className='lg:w-1/4 mx-auto'>
          <Tab  value={0}>Own Property</Tab>
          <Tab value={1}>Rent Property</Tab>
        </TabsList>
        
        <TabPanel  value={0}><Owntab /></TabPanel>
        <TabPanel value={1}><Renttab /></TabPanel>
      </Tabs>
    </div>
  );
}

export default Tabitem;

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  border: 1px solid ${({ theme }) => (theme.palette.mode === 'dark' ? grey[700] : grey[200])};
  border-radius: 12px;
`;

const TabsList = styled(BaseTabsList)`
  min-width: 400px;
  background-color: ${pink[600]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 30px ${({ theme }) => (theme.palette.mode === 'dark' ? grey[900] : grey[200])};
`;
