import React from 'react'

const KanbanBoard = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Monday</td>
          <td>Tuesday</td>
          <td>Wednesday</td>
          <td>Thursday</td>
          <td>Friday</td>
          <td>Saturday</td>
          <td>Sunday</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Do this</td>
          <td>Do that</td>
        </tr>
        <tr>
          <td>Do this</td>
          <td>Do that</td>
        </tr>
      </tbody>
    </table>
  )
}

export default KanbanBoard