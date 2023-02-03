import React, { ChangeEvent, useEffect, useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import cookies from 'js-cookie';

import { Layout } from 'components/layout';
import axios from 'axios';

interface Props {
  theme: string;
}

const ThemeChangePage: NextPage<Props> = ({ theme }) => {
  const [currenttheme, setCurrenttheme] = useState(theme);

  useEffect(() => {
    // console.log('LocalStorage:', localStorage.getItem('theme'));
    // console.log('Cookies:', cookies.get('theme'));
  }, []);

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrenttheme(value);
    localStorage.setItem('theme', value);
    cookies.set('theme', value);
    console.log('Cookies:', cookies.get('theme'));
  };

  const handleClick = async () => {
    const { data } = await axios.get('/api/hello');

    console.log(data);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup value={currenttheme} onChange={onThemeChange}>
              <FormControlLabel value={'ligth'} control={<Radio />} label='ligth' />
              <FormControlLabel value={'dark'} control={<Radio />} label='Dark' />
              <FormControlLabel value={'custom'} control={<Radio />} label='Custom' />
            </RadioGroup>
          </FormControl>
          <Button onClick={handleClick}>Request</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light', name = 'no name' } = req.cookies;

  const validThemes = ['ligth', 'dark', 'custom'];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'dark',
      name,
    },
  };
};

export default ThemeChangePage;
