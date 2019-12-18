import React from 'react';
import { Typography } from '@material-ui/core';

export default function Job({ job }) {
  return (
    <div className={'job'}>
      <Typography variant="h6">{job.title}</Typography>
      <Typography variant="h5">{job.company}</Typography>
    </div>
  );
}
