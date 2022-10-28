import * as React from "react";
import Wrapper from "../../../../Components/Admin/Navs/navWrapper";
import { useRouter } from "next/router";

const ScamDetails = () => {
	const router = useRouter();
	return (
		<Wrapper>
			<div>{router.query.id}</div>
		</Wrapper>
	);
};

export default ScamDetails;
