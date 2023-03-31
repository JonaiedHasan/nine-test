import React from 'react';

const SideCart = () => {
    return (
        <div>
            <div className='text-center border border-primary border-2 bg-white rounded p-3 bg-primary-subtle mt-2'>
                <h3 className='fw-bolder text-primary'>Spent time on read : 177 min</h3>
            </div>
            <div className="bg-info p-3">
            <h3 className='fw-bold'>Bookmarked Blogs : 8</h3>
            <div className='p-3 bg-white my-3 rounded'>
                <h5>Master Microsoft Power Platform and Become an In-Demand!</h5>
            </div>
            <div className='p-3 bg-white my-3 rounded'>
                <h5>How to get your first job as a self-taught programmer</h5>
            </div>
            </div>
        </div>
    );
};

export default SideCart;