import { message } from "antd";

import OrderSuccessImage from "../../assets/images/OrderSuccessImage.svg";
import Button from "../../components/Button";
import { withFadeIn } from "../../hoc/WithFadeIn";
import { useOrderSuccess } from "./useOrderSuccess";

const OrderSuccess = () => {
	const { navigateToMenu } = useOrderSuccess();

	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<div className="flex flex-col items-center w-full p-8">
				<img src={OrderSuccessImage} className="w-48 h-48" />
				<p className="mt-8 text-sm text-center text-text_primary">
					We are working on getting your order to you on time. Kindly hold on.
				</p>
				<div className="flex flex-col gap-2 mt-8">
					<Button className="text-sm" onClick={navigateToMenu}>
						Place New Order
					</Button>
					<Button.Ghost
						className="text-sm"
						onClick={() => message.success("notification works")}>
						Request for a waiter
					</Button.Ghost>
				</div>
			</div>
		</div>
	);
};

export default withFadeIn(OrderSuccess);
