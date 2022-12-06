import Link from "next/link";

interface NavItemProps {
	name: string;
	href: string;
}
const MenuLink: React.FC<NavItemProps> = ({ name, href }) => {
	return (
		<Link href={href}>
			<li className="cursor-pointer list-none py-4 font-normal text-2xl">{name}</li>
		</Link>
	);
};
export default MenuLink;
