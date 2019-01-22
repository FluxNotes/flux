import React from 'react';
import FontAwesome from 'react-fontawesome';

export const outcomeHeaders = [
    {
      header: "select to compare",
      type: "thin"
    },
    {
      header: <FontAwesome name="user" />,
      type: "center"
    },
    {
      header: "Overall survival rates",
      subheaders: [ '1 yr', '3 yr', '5 yr' ]
    },
    {
      header: 'Reported side effects',
      subheaders: [ 'all', 'leading cause' ]
    }
];
