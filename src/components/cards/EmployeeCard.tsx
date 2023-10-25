import { Employee } from 'src/types';
import { avatar } from 'assets/media';

type Props = {
	employee: Employee;
};

const EmployeeCard = ({ employee }: Props) => {
	let randomImages = [
		'https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg',
		'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		'https://i.pinimg.com/474x/54/38/50/5438506a71e10a87266d252d7b85365e.jpg',
		'https://i.insider.com/63fb81d984099d001960d513?width=1136&format=jpeg',
		'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg',
		'https://t4.ftcdn.net/jpg/01/15/85/23/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg',
	];
	let randomImage =
		randomImages[Math.floor(Math.random() * randomImages.length)];
	return (
		<div className="flex gap-4 rounded-lg bg-white p-6">
			<img
				className="h-20 w-20 rounded-[4.61538px] object-cover opacity-80"
				src={randomImage}
				alt="Employee image"
			/>
			<div className="flex flex-1 flex-col justify-center">
				<span className="font-gilroy-bold text-[21px] font-bold leading-6 text-midnight-grey">
					{employee.firstName} {employee.lastName}
				</span>
				<span className="font-gilroy-regular text-base font-normal text-slate-mist">
					{employee.department}
				</span>
			</div>
		</div>
	);
};

export default EmployeeCard;
