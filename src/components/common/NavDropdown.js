"use client"
import Link from "next/link";

const NavDropdown = ({ dropItems, activeSubItem, onItemClick }) => {
	return (
		<div
			className="hidden peer-hover:block hover:block sub-nav-bar absolute left-0 z-10 origin-top-right bg-white p-[20px] shadow-lg rounded-[5px] shadow-[rgba(0,0,0,0.23)]"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
		>
			<div className="py-1" role="none">
				{dropItems?.map((item, index) => (
					<Link
						prefetch={false}
						key={index}
						href={`${item?.href}`}
						className={`text-[14px] mx-[10px] mb-[10px] last:mb-0 block border-b-[0.8px] border-b-[#ececec] last:border-0 pb-[10px] last:pb-0 text-sm uppercase font-semibold whitespace-nowrap ${activeSubItem === item ? "text-[#0752A6]" : "text-[#000]"}`}
						role="menuitem"
						id="menu-item-1"
						onClick={() => onItemClick(item)}
					>
						{item?.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default NavDropdown;
