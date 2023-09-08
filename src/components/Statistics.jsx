// <Statistics good={} neutral={} bad={} total={} positivePercentage={}>

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  
  return (
    <ul>
        <li> good: {good} </li>
        <li> neutral: {neutral} </li>
        <li> bad: {bad} </li>
        <li> total: {total} </li>
        <li> positive feedback: {positivePercentage}% </li>
      </ul> 
  );
   
  
  
  // console.log(Object.keys(props));
   // const propKyes = Object.keys(props);
    // console.log(propKyes)
    // console.log(good)
    // console.log(props[good])

  //   return (
  //   <ul>
  //     {propKyes.map(one =>
  //           (<li key={one}>
  //               {one}: { props[one]}
  //           </li>)
  //     )}
  //       </ul> 
  // );


}