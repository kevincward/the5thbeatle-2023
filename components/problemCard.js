export default function ProblemCard(props) {
    const { backgroundColor, textColor, content } = props;
    return (
        <div className='container py-10 lg:py-12'>
            <div
                className='rounded-lg p-8'
                style={{ backgroundColor: backgroundColor }}
            >
                <p
                    className='font-recoleta text-3xl font-semibold lg:text-4xl'
                    style={{ color: textColor }}
                    dangerouslySetInnerHTML={{ __html: content }}
                ></p>
            </div>
        </div>
    );
}
