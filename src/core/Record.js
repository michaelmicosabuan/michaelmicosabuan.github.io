import React from 'react'

function Record() {
  return (
    <div className="container py-5">
        <div className="text-center">
            <h1> Daily Time Record </h1>
        </div>
      <div className="text-center py-5">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Arrival</th>
      <th scope="col">Departure</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>7:40 am</td>
      <td>3:50 pm</td>
      <td>8 hrs and 10mins </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>6:18 am</td>
      <td>3:10 pm</td>
      <td>8hrs and 52 mins</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>10:11 pm</td>
      <td>7:30 pm </td>
      <td> 8 hrs 29 mins </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td> 7:10 am </td>
      <td> 3:12 pm </td>
      <td> 8 hrs 2 mins </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td> 8:03 am</td>
      <td> 4:07 pm </td>
      <td> 8 hrs 4 mins </td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td> 7:21 pm</td>
      <td> 5:05 pm </td>
      <td> 9 hrs 11 mins </td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td> 10:41 pm</td>
      <td> 7:32 pm </td>
      <td> 8 hrs 9 mins </td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td> 9:01 pm</td>
      <td> 5:09 pm </td>
      <td> 8 hrs 8 mins </td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td> 8:07 pm</td>
      <td> 4:41 pm </td>
      <td> 8 hrs 34 mins </td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td> 9:27 pm</td>
      <td> 5:41 pm </td>
      <td> 8 hrs 14 mins </td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Record
