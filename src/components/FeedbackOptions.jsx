// кнопки; тупий компонент, який збирає дані і передає в Statistics
// <FeedbackOptions options={} onLeaveFeedback={}>

export default function FeedbackOptions({options, onLeaveFeedback}) {
    console.log(options)
    
     return (
    <ul>
      {options.map(one => (
          <li key={one}>
              <button type="button" id={ one } onClick={onLeaveFeedback}>{ one }</button>
          </li>
      ))}
    </ul>
  );
}
