'use client'
import React from 'react';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';

const optionsCollege = [
    { value: 'college1', label: 'College 1' },
    { value: 'college2', label: 'College 2' },
    // Add more options here
];

const optionsMajor = [
    { value: 'major1', label: 'Major 1' },
    { value: 'major2', label: 'Major 2' },
    // Add more options here
];

const customStyles = {
    control: (base) => ({
        ...base,
        height: '50px',
        minHeight: '50px',
        fontSize: '16px',
        border: 'none',
        boxShadow: 'none',
        textAlign: 'left'
    }),
    valueContainer: (base) => ({
        ...base,
        padding: '0 15px',
        textAlign: 'left'
    }),
    input: (base) => ({
        ...base,
        margin: '0',
        padding: '0',
        textAlign: 'left'
    }),
    placeholder: (base) => ({
        ...base,
        textAlign: 'left'
    }),
    singleValue: (base) => ({
        ...base,
        textAlign: 'left',
        color: 'black'
    }),
    menu: (base) => ({
        ...base,
        color: 'black' // Change text color in the dropdown menu
    }),
    option: (base, state) => ({
        ...base,
        color: state.isSelected ? 'white' : 'black', // Change text color for selected and non-selected options
        backgroundColor: state.isSelected ? '#2684FF' : 'white', // Customize the background color for selected option
        '&:hover': {
            backgroundColor: '#B3D4FC', // Customize the hover color
            color: 'black'
        }
    }),
};

export const SearchBar = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-3xl shadow-xl w-full max-w-5xl mx-auto space-y-4 sm:space-y-0">
            <div className="flex-1 relative pr-0 sm:pr-6 flex flex-col justify-center w-full sm:w-auto">
                <label className="block text-black text-lg font-bold mb-2 text-left ml-4" htmlFor="college">
                    College:
                </label>
                <Select
                    id="college"
                    options={optionsCollege}
                    placeholder="Search School..."
                    styles={customStyles}
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-gray-300"></div>
            </div>
            <div className="flex-1 relative px-0 sm:px-6 flex flex-col justify-center w-full sm:w-auto">
                <label className="block text-black text-lg font-bold mb-2 text-left ml-4" htmlFor="major">
                    Major:
                </label>
                <Select
                    id="major"
                    options={optionsMajor}
                    placeholder="Select Major..."
                    styles={customStyles}
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-gray-300"></div>
            </div>
            <div className="flex-1 relative pl-0 sm:pl-6 flex flex-col justify-center w-full sm:w-auto">
                <label className="block text-black text-lg font-bold mb-2 text-left ml-4" htmlFor="name">
                    Name:
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Name of Student Profile"
                    className="w-full p-3 rounded-lg text-md border-none ml-3"
                    style={{ border: 'none', boxShadow: 'none', textAlign: 'left', color: 'black' }}
                />
            </div>
            <div className="flex items-center justify-center ml-0 sm:ml-6">
                <button className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-300 flex items-center justify-center focus:outline-none">
                    <FaSearch className="text-white text-xl" />
                </button>
            </div>
        </div>
    );
};
