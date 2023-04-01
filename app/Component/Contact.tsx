import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='flex items-center max-w-7xl mx-auto mb-10 leading-8'>
        <div className='text-gray-500 px-10 mx-auto mt-32'>
            <h1 className="text-white text-center text-4xl uppercase m-4">contact</h1>
            <p className='text-center'>Get in touch with me</p>
            <form>
                <div>
                    <input placeholder='Adeel Khalid' type={"text"} required
                    className="p-2 w-80 border-8 rounded-md focus:outline-none" />
                </div>

                <div className='my-5'>
                    <input required placeholder='adeelkhalid147@gmail.com' type={"email"}
                    className="p-2 w-80  border-8 rounded-md focus:outline-none" />
                </div>
                <div>
                    <textarea
                    rows={6}
                    className="p-2 w-80  border-8 rounded-md focus:outline-none"
                    placeholder='your message here....... formspree.io'/>
                </div>
                <button type='submit' className='mx-auto block my-5 px-5 rounded-md bg-gradient-to-b from-gray-300'>Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact