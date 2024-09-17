import React from 'react';  

const OutLostP = () => {
  
  const data = [
    { name: 'ت.اساسی', value: 2500 ,stop: 70, day: 1},
    { name: 'ت.هفتگی', value: 2300 ,stop: 50, day: 1.5},
    { name: 'ت.سایز', value: 2400 ,stop: 60, day: 1.5},
    { name: 'ک. مواد', value: 5000 ,stop: 600, day: 5},
    { name: 'قطع برق', value: 4500 ,stop: 400, day: 4},
    { name: 'ت. م. برشرایط', value: 0 ,stop: 0, day: 0},
    { name: 'ک.قطعه', value: 4500 ,stop: 400, day: 4},
    { name: 'سایر', value: 2800 ,stop: 80, day: 2},
  ];
    

  return (
    <div className="stop-in">
      <span className="efficiency-text">تولیدات از دست رفته به دلیل توقفات خارج</span><br />
      <div>
        <table className="custom-table">
          <thead>
            <tr>
              <th>عنوان توقف</th>
              <th>
                <span>تولیدات از</span><br />
                <span>دست رفته</span>
              </th>
              <th>ساعت توقف</th>
              <th>
              <span> توقف</span><br />
              <span> (روز)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.value}</td>
                <td>{user.stop}</td>
                <td>{user.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}  

export default OutLostP;  