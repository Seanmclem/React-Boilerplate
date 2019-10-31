import React from 'react'

const style = {
    textAlign: 'center'
  };

export const NotFound = () => {
    return(
        <>
            <h3 style={style}>404 - This page is not found</h3>
            <p  style={style}>Please check your URL and try again.</p>
        </>
    )

}