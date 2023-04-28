import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
	{ month: 'January: 1/1/2023', orange: 3310, blue: 450 },
	{ month: 'March: 1/3/2023', orange: 4433, blue: 705 },
	{ month: 'May: 1/5/2023', orange: 3000, blue: 3001 },
	{ month: 'July: 1/7/2023', orange: 300, blue: 4225 },
	{ month: 'September: 1/9/2023', orange: 1080, blue: 5000 },
	{ month: 'November: 1/11/2023', orange: 1501, blue: 610 },
];

const HoursChart = () => {
	const [showOrange, setShowOrange] = useState(true);
	const [showBlue, setShowBlue] = useState(true);

	return (
		<div className='bg-white border-solid border rounded-md box-border w-[1050px] h-[550px]'>
			<div className='flex-row inline-flex justify-between items-center gap-2.5 w-[1010px] h-[68px] top-0 mt-1 ml-5'>
				<div className=' flex items-center'>
					<h2 className='font-semibold not-italic text-lg font-gilroy-semi-bold text-deep-forest '>Hours Overview</h2>
					<a href='#' className='ml-3 not-italic font-inter-bold text-base font-bold underline text-sage-green '>
						See Details
					</a>
				</div>
				<div className='flex h-[68px] flex-row justify-end items-center gap-4 mr-1'>
					<div className='flex flex-row items-center p-0 gap-y-2 top-0'>
						<input
							onChange={() => setShowOrange(!showOrange)}
							className='border-2 border-solid border-[#FF9F5A] rounded-full w-[15px] h-[15px] appearance-none checked:bg-[#FF9F5A] checked:border-transparent focus:outline-none'
							type='checkbox'
							checked={showOrange}
						/>
						<p className=' ml-2 text-sm font-medium font-gilroy-medium text-gray-900'>Grand Total Hours Available</p>
					</div>
					<div className='flex flex-row items-center p-0 gap-y-2'>
						<input
							onChange={() => setShowBlue(!showBlue)}
							className='border-2 border-solid border-sage-green rounded-full w-[15px] h-[15px] appearance-none checked:bg-sage-green checked:border-transparent focus:outline-none'
							type='checkbox'
							checked={showBlue}
						/>
						<p className='ml-2 text-sm font-medium font-gilroy-meidum text-gray-900'>Grand Total Hours Billed</p>
					</div>
				</div>
			</div>
			<hr className='mb-5 ml-5 mr-5'></hr>
			<div className='ml-4'>
				<BarChart width={1020} height={420} data={data} className='absolute top-0 left-0'>
					<CartesianGrid strokeDasharray='3 3' vertical={false} />
					<XAxis dataKey='month' tickLine={false} dy={12} />
					<YAxis domain={[0, 6000]} axisLine={false} tickLine={false} />
					<Tooltip />
					<g transform='translate(0, 10)'></g>
					{showOrange && <Bar dataKey='orange' fill='#FF9F5A' radius={[4, 4, 0, 0]} barSize={20} />}
					{showBlue && <Bar dataKey='blue' fill='#7BB99F' radius={[4, 4, 0, 0]} barSize={20} />}
				</BarChart>
			</div>
		</div>
	);
};

export default HoursChart;