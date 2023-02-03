import React, { ChangeEvent, useState } from 'react';
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

import { Layout } from 'components/layout';

const ThemeChangePage: NextPage = () => {
  const [currenttheme, setCurrenttheme] = useState('ligth');

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrenttheme(e.target.value);
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
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangePage;
