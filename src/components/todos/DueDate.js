import React from 'react';
import moment from 'moment';

const DueDate = ({ date, format }) => {
  const formatted = React.useMemo(() => (format ? moment(date).format(format) : moment(date).fromNow()), [
    date,
    format,
  ]);

if (date == undefined)
  var i = new Date();
else
  var i = new Date(date);
const DateFromNow = new Date();
var date1 = Date.UTC(i.getFullYear(), i.getMonth(), i.getDate());
var date2 = Date.UTC(DateFromNow.getFullYear(), DateFromNow.getMonth(), DateFromNow.getDate());
var ms = date1-date2;
var q =  Math.floor(ms/1000/60/60/24);



if (q<1)
  return <span className="text-danger">{formatted}</span>;
  else{
  if (q<3 && q>0)
   return <span className="text-warning">{formatted}</span>;
  else {
    return <span className="text-success">{formatted}</span>;
  }}
};

export default DueDate;
