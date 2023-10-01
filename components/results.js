import CountUp from 'react-countup';

export default function Results(props) {
    const { kicker, title, values, text } = props;

    return (
        <div className='container'>
            {kicker && kicker !== '' ? (
                <p className='pb-2 text-xs uppercase text-gray'>Kicker</p>
            ) : (
                ''
            )}

            {title && title !== '' ? (
                <p className='pb-3 font-recoleta text-3xl font-semibold'>
                    {title}
                </p>
            ) : (
                ''
            )}
            <div className='flex flex-col lg:flex-row'>
                {Object.keys(values).map((key) => (
                    <div
                        key={key}
                        className='mb-4 text-center text-5xl font-bold'
                    >
                        <CountUp
                            enableScrollSpy
                            start={values[key].start}
                            end={values[key].end}
                            prefix={values[key].prefix}
                            suffix={values[key].suffix}
                        />
                        <p className='text-base font-normal'>
                            {values[key].title}
                        </p>
                    </div>
                ))}
            </div>
            <p className='text-[1.125rem]'>{text}</p>
        </div>
    );
}
