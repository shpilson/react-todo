import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge';

import closeSvg from '../../assets/img/close.svg'

import './AddList.scss';

const AddList = ({ colors, onAdd }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const addList = () => {
        if (!inputValue) {
            alert('Введите нaзвание 4 cпискa');
            return;
        }
        onAdd({
            "id": Math.random(),
            "name": inputValue,
            "colorId": selectedColor
        });
    }

    return (
        <div className="add-list">
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        className: 'list__add-button',
                        icon: (<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="list__icon-plus">
                            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ),
                        name: 'Добaвить список'
                    }
                ]}
            />
            {visiblePopup && (
                <div className="add-list__popup">
                    <img
                        onClick={() => setVisiblePopup(false)}
                        src={closeSvg}
                        alt="Close button"
                        className="add-list__popup-close-btn" />
                    <input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        className="field"
                        type="text"
                        placeholder="Название списка" />
                    <div className="add-list__popup-colors">
                        {
                            colors.map(color =>
                                <Badge
                                    onClick={() => selectColor(color.id)}
                                    key={color.id}
                                    color={color.name}
                                    className={selectedColor === color.id && 'active'}
                                />)
                        }
                    </div>
                    <button onClick={addList} className="button">Дoбавить</button>
                </div>
            )}
        </div>
    );
};

export default AddList;