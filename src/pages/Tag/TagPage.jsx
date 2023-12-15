// 태그는 아직 정형화되지 않음. 계속 추가되거나 수정됨
// 현재는 같은 분류끼리 같은 색으로 할 예정
function Tag() {
    // bc - bg color, tc - text color
    const tags = [
        { class:'genre', name:'SF', style:'bg-fuchsia-400 text-fuchsia-900' },
        { class:'genre', name:'판타지', style:'bg-lime-400 text-lime-900' },
        { class:'genre', name:'학원물', style:'bg-sky-400 text-sky-900' },
        { class:'genre', name:'시대물', style:'bg-rose-400 text-rose-900'},
        { class:'genre', name:'액션', style:'bg-violet-400 text-violet-900' },
        { class:'genre', name:'뮤지컬', style:'bg-emerald-400 text-emerald-900' },
        { class:'genre', name:'히어로', style:'bg-yellow-400 text-yellow-900'},
        { class:'genre', name:'애니메이션', style:'bg-indigo-400 text-indigo-900' },
        { class: 'genre', name: '병맛', style: 'bg-orange-400 text-orange-900' },
        { class: 'genre', name: '스릴러', style: 'bg-cyan-400 text-cyan-900' },
        { class: 'genre', name: '누아르', style: 'bg-green-400 text-green-900' },
        { class:'genre', name:'공포', style:'bg-stone-400 text-stone-900' },
        
        { class:'recommend', name:'강추👍👍', style:'bg-amber-500 text-amber-950' },
        { class:'recommend', name:'추천👍', style:'bg-amber-300 text-amber-800' },
        { class:'recommend', name:'비추👎', style:'bg-amber-100 text-amber-600' },
        
        { class:'charact', name:'연기🎬', style:'bg-violet-900 text-violet-400' },
        { class:'charact', name:'눈물😭', style:'bg-sky-900 text-sky-400' },
        { class:'charact', name:'스토리📜', style:'bg-amber-900 text-amber-400' },
        { class:'charact', name:'내취향💘', style:'bg-rose-900 text-rose-400' },
        { class:'charact', name:'재미😆', style:'bg-sky-900 text-sky-400' },
        { class:'charact', name:'시리즈🔗', style:'bg-emerald-900 text-emerald-400' },
        
        { class:'another', name:'내취향💘', style:'border-2 border-rose-200 text-rose-200' },
    ]
    // 영화 장르
    // SF, 판타지, 학원물, 시대물, 액션, 뮤지컬, 애니메이션, 히어로
    const genreTags = tags.filter(tag => tag.class === 'genre');
    // 추천 정도
    const recoTags = tags.filter(tag => tag.class === 'recommend');
    // 특성별
    const chaTags = tags.filter(tag => tag.class === 'charact');
    // 그 외
    const anotherTags = tags.filter(tag => tag.class === 'another');

    return(
        <div  className='bg-slate-900 text-gray-100'>
            <div className='mx-auto max-w-screen-lg px-3 py-6'>
                <h2 className='mb-6 text-2xl font-bold'>태그🏷️</h2>

                <div className="mb-12">
                    <h2 className='mb-6 text-base font-bold'>모든 태그</h2>
                    <div className='ml-3 flex flex-wrap gap-2'>
                        {tags.map((item, idx) => (
                            <div key={idx}
                                className={`rounded-md px-2 py-1 text-xs font-semibold ${item.style}`}
                            >{item.name}</div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className='mb-6 text-base font-bold'>장르별</h2>
                    <div className='ml-3 flex flex-wrap gap-2'>
                        {genreTags.map((item, idx) => (
                            <div key={idx}
                                className={`rounded-md px-2 py-1 text-xs font-semibold ${item.style}`}
                            >{item.name}</div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className='mb-6 text-base font-bold'>추천별</h2>
                    <div className='ml-3 flex flex-wrap gap-2'>
                        {recoTags.map((item, idx) => (
                            <div key={idx}
                                className={`rounded-md px-2 py-1 text-xs font-semibold ${item.style}`}
                            >{item.name}</div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className='mb-6 text-base font-bold'>특성별</h2>
                    <div className='ml-3 flex flex-wrap gap-2'>
                        {chaTags.map((item, idx) => (
                            <div key={idx}
                                className={`rounded-md px-2 py-1 text-xs font-semibold ${item.style}`}
                            >{item.name}</div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className='mb-6 text-base font-bold'>그 외</h2>
                    <div className='ml-3 flex flex-wrap gap-2'>
                        {anotherTags.map((item, idx) => (
                            <div key={idx}
                                className={`rounded-md px-2 py-1 text-xs font-semibold ${item.style}`}
                            >{item.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tag;
