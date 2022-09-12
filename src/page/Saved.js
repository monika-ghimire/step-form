import React from 'react'

export default function Saved(props) {
  return (
    <>
    Your accout has been created.
    <p>preview</p>

    <div id='preview'></div>
    <button onClick={props.data}>show all Data</button>
    </>
  )
}
