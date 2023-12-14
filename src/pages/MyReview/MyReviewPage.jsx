// import { useState } from 'react';
import ReviewList from './ReviewList';

function MyReview () {
    const reviewData = [
        {id: 1, title: '플라워 킬링 문', star: 5, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'},
        {id: 2, title: '아쿠아맨', star: 4, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'},
        {id: 3, title: '에에올', star: 1, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'},
        {id: 4, title: '다크나이트 라이즈', star: 1, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'},
        {id: 5, title: '어벤져스', star: 1, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'},
        {id: 6, title: '스파이더맨', star: 1, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'},
        {id: 7, title: '주먹왕 랄프', star: 1, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'},
        {id: 8, title: '플라워 킬링 문', star: 1, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'},
        {id: 9, title: '플라워 킬링 문', star: 1, des: '디카프리오 개찌질하고 개나쁘고 멍청하고 욕심많음'}
    ]

    return (
        <div className='bg-slate-900 text-gray-100'>
            <h2 className='mb-6 text-2xl font-bold'>내 영화 리뷰들</h2>

            <div>
                <ReviewList data={reviewData} />
            </div>
        </div>
    )
}

export default MyReview;