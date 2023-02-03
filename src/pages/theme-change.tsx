import React, { ChangeEvent, useEffect, useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import {
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

const ThemeChangePage: NextPage = (props) => {
  const [currenttheme, setCurrenttheme] = useState('ligth');

  console.log(props);

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrenttheme(value);
    localStorage.setItem('theme', value);
    cookies.set('theme', value);
  };

  useEffect(() => {
    console.log(localStorage.getItem('theme'));
  }, []);

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
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light', name = 'no name' } = req.cookies;

  console.log(cookies);

  return {
    props: {
      theme,
      name,
    },
  };
};

export default ThemeChangePage;
