import check from 'images/check.png';

export function Task() {
  return (
    <div className="task plainTask" id={'id'}>
      <div className="taskName">
        <div className="radio leftElement">
          <img width="15" src={check} alt="Checked" />
        </div>
        <span className="taskTitle">{'value'}</span>
      </div>
    </div>
  );
}
