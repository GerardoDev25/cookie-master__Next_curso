import React, { ChangeEvent, useEffect, useState } from 'react';
import { NextPage } from 'next';
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

const ThemeChangePage: NextPage = () => {
  const [currenttheme, setCurrenttheme] = useState('ligth');

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log({ value });
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

export default ThemeChangePage;
