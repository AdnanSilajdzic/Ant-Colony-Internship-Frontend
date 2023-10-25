import { avatar } from 'assets/media';

type Props = {
	className?: string;
	src?: string;
	alt: string;
	names?: {
		firstName: string;
		lastName: string;
	}[];
};

const Avatar = ({ className, src, alt }: Props) => {
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
		<img
			className={`object-cover ${className}`}
			src={src ? src : randomImage}
			alt={alt}
		/>
	);
};

export default Avatar;
