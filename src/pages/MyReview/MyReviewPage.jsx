// import { useState } from 'react';
import ReviewList from './ReviewList';
import review_data from '../../assets/mock/review';

function MyReview () {
    const reviewData = review_data;

    return (
        <div className='bg-slate-900 text-gray-100'>
            <div className='mx-auto max-w-screen-lg px-3 py-6'>
                <h2 className='mb-6 text-2xl font-bold'>내 영화 리뷰들🎬</h2>

                <div>
                    <ReviewList data={reviewData} />
                </div>
            </div>
        </div>
    )
}

export default MyReview;