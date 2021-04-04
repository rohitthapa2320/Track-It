const formatDate =(date) => {
  const d= new Date(date);
  let m= `${d.getMonth()+1}`;
  let dy= `${d.getDay()}`;
  const y= d.getFullYear();

  if(m.length < 2){
    m=`0${m}`;
  }
  if(dy.length < 2){
    dy=`0${dy}`;
  }

  return [y,m,dy].join('-');
}

export default formatDate;