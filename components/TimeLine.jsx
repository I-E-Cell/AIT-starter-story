"use client"

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function TimeLine() {
  return (
    <div >
            <Timeline position="alternate" sx={{
                py:10
            }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{
            height:200

        }} />
        </TimelineSeparator>
        <TimelineContent sx={{
            fontSize:30
        }}>BLOGS</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{
            height:200
        }}/>
        </TimelineSeparator>
        <TimelineContent sx={{
            fontSize:30
        }}>PODCASTS</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{
            height:200
        }} />
        </TimelineSeparator>
        <TimelineContent sx={{
            fontSize:30
        }}>STARTER STORIES</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent sx={{
            fontSize:30
        }}>TESTOMONIALS <div className='text-sm w-96'>
            ok hi
        </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}