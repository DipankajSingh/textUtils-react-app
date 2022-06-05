import React from 'react'
export default function About(props) {

    return (
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1 style={{color: props.mode === 'light' ? 'black' : 'white'}}>about us</h1>
      <p style={{color: props.mode === 'light' ? 'black' : 'white'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ut harum dolor quia in, iure culpa soluta porro perferendis minima laudantium? Odit expedita quod a natus necessitatibus incidunt, aut quia.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero neque eveniet id voluptatibus est doloribus incidunt in obcaecati ipsum dolores cupiditate voluptate perferendis suscipit aliquam laborum provident, eligendi cumque enim!
      </p>

     
    </div>
  )
}
