import Link from "next/link";

interface NavItemProps {
	title: string;
	href: string;
	hasWhiteText?: boolean;
	isTransparent: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ title, href, hasWhiteText, isTransparent }) => {
	return (
		<li>
			<Link href={href}>
				<a
					style={{
						color: hasWhiteText && isTransparent ? "white" : "black",
					}}
					className="transition-all block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-eccblue md:p-0 dark:text-black md:dark:hover:text-eccblue dark:hover:bg-gray-700 dark:hover:text-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
				>
					{title}
				</a>
			</Link>
		</li>
	);
};
