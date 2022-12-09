// import Lottie from "react-lottie";

interface LottieAnimationProps {
	animationData: any;
	height: number;
	width: number;
}
const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, height, width }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			{/* <Lottie
				options={defaultOptions}
				height={height}
				width={width}
			/> */}
			Loading...
		</div>
	);
};
export default LottieAnimation;
