import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { getReadBooksFromLS } from '../../utils/localStorage';
import { useLoaderData } from 'react-router-dom';

const getPath = (x, y, width, height) => (
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);
const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const ReadChart = () => {
    const books = useLoaderData()
    const readBookIds = getReadBooksFromLS()
    const readBooks = books.filter(book => readBookIds.includes(book.bookId))

    return (
        <div className='container mx-auto'>
            <BarChart width={1000} height={500} data={readBooks}>
                <XAxis dataKey="bookName"  />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8"
                    shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default ReadChart;