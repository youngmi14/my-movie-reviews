import '../../index.css';

function renderStars (count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(<div key={i}>⭐</div>);
    }
    return stars;
}

function ReviewBox ({ item }) {
    const {title, star, des} = item;
    const stars = renderStars(star);

    return(
        <div className='flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row'>
            <div className='flex flex-col items-center gap-y-2 md:flex-row'>
                <div className='text-xl font-semibold'>{title}</div>
                <div className='ml-3 flex gap-2'>
                    {stars}
                </div>
                <div className='ml-3 flex gap-2'>
                    <div className='rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900'>해외</div>
                    <div className='rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900'>시대물</div>
                    <div className='rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900'>3시간이상</div>
                    <div className='rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900'>연기</div>
                    <div className='rounded-md px-2 py-1 text-xs font-semibold bg-violet-400 text-violet-900'>시대물</div>
                    <div className='rounded-md px-2 py-1 text-xs font-semibold bg-emerald-400 text-emerald-900'>시대물</div>
                    <div className='rounded-md px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900'>시대물</div>
                    <div className='rounded-md px-2 py-1 text-xs font-semibold bg-indigo-400 text-indigo-900'>시대물</div>
                </div>
            </div>
            <div className='mt-3 text-gray-400'>{des}</div>
        </div>
    )
}

function ReviewList ({ data }) {
    
    return(
        <ul className='flex flex-col gap-6'>
            {data.map((item) => (
                <li key={item.id}>
                    <ReviewBox item={item} />
                </li>
            ))}
        </ul>
    )
}

export default ReviewList;