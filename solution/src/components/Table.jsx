import React from 'react'

function Table({persons} ) {
  return (
    <table class="table mt-5 px-5">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            </tr>
        </thead>
        <tbody>
            {persons?.map(p => {
                return (
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.location}</td>
                    </tr>
            )})}
           
        </tbody>
    </table>
  )
}

export default Table