import * as React from "react";
import Markdown from 'react-markdown';

// TODO this would be nice to be able to close but I dont have it right yet

type PaddleTopBarTypes = {
  strapiLocale: {
    topbar: {
      data: {
        topbar: string;
      }
    }
  };
  allStrapiWeatherDay: {
    nodes: {
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
      closed: boolean;
      condition: {
        excerpt: string;
      }
    }[];
  };
}
export const PaddleTopBar = ({ strapiLocale, allStrapiWeatherDay }: PaddleTopBarTypes) => {

  let currentWeather = '';
  let currentStatus = false;
  const currentDate = new Date().toISOString().split('T')[0];
  console.log('currentDate', currentDate);

  allStrapiWeatherDay.nodes.map((date) => {
    if (date.startDate === currentDate || currentDate >= date.startDate && currentDate <= date.endDate) {
      currentWeather = date.condition.excerpt;
      currentStatus = date.closed;

      console.log('inside the if', date.startDate);
    }
  });

  return (
    <div className={`top-bar ${currentStatus ? 'closed' : 'open'}`} >
      {currentWeather ? <p>{currentWeather}</p> :
        <Markdown>
          {strapiLocale.topbar.data.topbar}
        </Markdown>
      }
    </div>
  )
}