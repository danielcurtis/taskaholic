import React, { useState } from 'react';

function Table({ setModal }) {
  const taskData = [
    {
      name: 'Complete biology lab report',
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#BIO202',
      status: 'In Progress',
      due: '05/01/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
    {
      name: 'Take the dog to the vet',
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#HOME03',
      status: 'In Progress',
      due: '05/05/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
    {
      name: 'Build a cool web app in React',
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#PROJCT',
      status: 'In Progress',
      due: '04/20/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
    {
      name: 'Midterm exam',
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#PYS204',
      status: 'Not Started',
      due: '04/30/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
    {
      name: 'Buy a new dishwasher',
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#HOME01',
      status: 'Not Started',
      due: '04/05/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
    {
      name: "Mulch grandma's flower bed",
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#HOME02',
      status: 'Not Started',
      due: '04/25/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
    {
      name: 'Office hours with professor Angela',
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#BIO202',
      status: 'Paused',
      due: '04/15/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
    {
      name: 'Play date with Rufus',
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#HOME01',
      status: 'Paused',
      due: '04/10/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
    {
      name: 'Study with Levonne',
      description: 'Complete bio 202 lab report, dont forget carls notes!',
      tag: '#MTH101',
      status: 'Completed',
      due: '04/01/20',
      timelog: [
        ['04/05/20', 0.5],
        ['04/20/20', 1.5],
      ],
    },
  ];
  const [filter, setFilter] = useState('week');
  const [sort, setSort] = useState('date');

  // Filter by completed tasks
  let tasks = taskData.filter((i) => i.status !== 'Completed');

  // Sort by date, status, or tag
  if (sort === 'date') {
    tasks = tasks.sort((a, b) => {
      return a.due > b.due ? 1 : b.due > a.due ? -1 : 0;
    });
  } else if (sort === 'status') {
    tasks = tasks.sort((a, b) => {
      return a.status > b.status ? 1 : b.status > a.status ? -1 : 0;
    });
  } else if (sort === 'tag') {
    tasks = tasks.sort((a, b) => {
      return a.tag > b.tag ? 1 : b.tag > a.tag ? -1 : 0;
    });
  }

  // Filter by week or month
  if (filter === 'week') {
    tasks = tasks.filter((i) => {
      let week = new Date();
      week.setDate(week.getDate() + 7);
      let due = new Date(i.due);
      return due < week;
    });
  } else if (filter === 'month') {
    tasks = tasks.filter((i) => {
      let td = new Date();
      let due = new Date(i.due);
      return due.getMonth() === td.getMonth();
    });
  }
  return (
    <table className="table-auto text-lg m-auto mt-10">
      <thead>
        <tr className="text-sm text-white">
          <th></th>
          <th></th>
          <th className="font-normal">
            <button onClick={() => setSort('status')}>STATUS</button>
          </th>
          <th className="font-normal">
            <button onClick={() => setSort('tag')}>TAG</button>
          </th>
          <th className="font-normal">
            <button
              onClick={() => {
                setFilter('week');
                setSort('date');
              }}
            >
              WEEK
            </button>
            {` `}
            <button
              onClick={() => {
                setFilter('month');
                setSort('date');
              }}
            >
              MONTH
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((el, i) => {
          return (
            <tr key={i} className="">
              <td className="pr-3">
                <div
                  className="border-solid border-2 border-indigo-700 rounded-full"
                  style={{ width: `10px`, height: `10px` }}
                ></div>
              </td>
              <td
                className="pr-20 pl-1 py-5 cursor-pointer hover:text-owl-blu text-white"
                onClick={() => setModal(el)}
              >
                {el.name}
              </td>
              <td className="text-sm">
                <span className="text-blue-500 text-sm px-4 py-2 rounded-full shadow-inner">
                  {el.status}
                </span>
              </td>
              <td className="px-3">
                <span className="text-blue-500 text-sm px-4 py-2 rounded-full shadow-inner">
                  {el.tag}
                </span>
              </td>
              <td>
                <span
                  className={`${
                    new Date(el.due) > new Date()
                      ? 'text-gray-700'
                      : 'text-red-400'
                  } px-4 py-2 text-sm rounded-full shadow-inner`}
                >
                  {el.due}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
