import React, { useState } from 'react'

export default function Body(props) {
    const [text, setText] = useState('')
    const upCase = (event) => {
        if (event.target.innerText === 'upper') {
            setText(text.toUpperCase())
            props.showAlert('Uppercase!', 'success')
        }
        if (event.target.innerText === 'lower') {
            setText(text.toLowerCase())
            props.showAlert('Lowercase!', 'success')
        }
        if (event.target.innerText === 'select') {
            navigator.clipboard.writeText(text)
            props.showAlert('Selected!', 'success')
        }
        if (event.target.innerText === 'empty') {
            setText('')
            props.showAlert('Erased!', 'denger')

        }
        if (event.target.innerText === 'capitalize') {
            let arr = text.split(' ')
            let upperText = ''
            arr.forEach((value) => {
                upperText = upperText + ' ' + value.charAt(0).toUpperCase() + value.slice(1)
            })
            setText(upperText.replace(' ', ''))
            props.showAlert('capitalized!', 'success')
        }
        if (event.target.innerText === 'remove spaces') {
            setText(text.replace(/\s+/g, ' '))
            props.showAlert('All the extra spaces has been removed!', 'success')

        }

    }
    const onChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container'>
                <div className="mb-3 p-4">
                    <h1 className="form-label" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Enter Text Below!</h1>
                    <textarea
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'black',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }} className="form-control" rows="4" value={text} onChange={onChange} id='t' placeholder="A cool article!"></textarea>
                </div>
                <div className='mx-auto'>
                    <button type="button" className="btn btn-outline-success m-1" disabled={text.length === 0} onClick={upCase} >upper</button>
                    <button type="button" className="btn btn-outline-success m-1" disabled={text.length === 0} onClick={upCase}>lower</button>
                    <button type="button" className="btn btn-outline-success m-1" disabled={text.length === 0} onClick={upCase}>capitalize</button>
                    <button type="button" className="btn btn-outline-success m-1" disabled={text.length === 0} onClick={upCase}>remove spaces</button>
                    <button type="button" className="btn btn-outline-danger m-1" disabled={text.length === 0} onClick={upCase}>empty</button>
                    <button type="button" className="btn btn-outline-danger m-1" disabled={text.length === 0} onClick={upCase}>select</button>
                </div>
            </div>
            <div className='container'>
                <h3 style={{
                    color: props.mode === 'light' ? 'black' : 'white'
                }}>Text summary</h3>
                <p style={{
                    color: props.mode === 'light' ? 'black' : 'white'
                }}>{text.split(/\s+/).filter((val) => { return val.length !== 0 }).length} words and {text.length} character</p>
                <p style={{
                    color: props.mode === 'light' ? 'black' : 'white'
                }}>can be read in {0.08 * text.split(' ').length}</p>
                <h3 className='mx-4'>Preview</h3>
                <p className='mx-1'>{text === '' ? 'Nothing to preview!' : text}</p>
            </div>
        </>

    )
}
