import React from 'react';
import List from './List'

const AddListButton = () => {
    return (<List
        items={[
            {
                className: 'list__add-button',
                icon: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="list__icon-plus">
                    <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                ,
                name: 'Добавить список'
            },
        ]}
    />)
};

export default AddListButton;