import {
	BadgeIcon,
	BookCopyIcon,
	CodepenIcon,
	FacebookIcon,
	GithubIcon,
	HomeIcon,
	LinkedinIcon,
	TwitterIcon,
	UserIcon,
	YoutubeIcon,
} from "lucide-react"

export const siteConfig = {
	name: "CỔNG THÔNG TIN ĐIỆN TỬ",
	bio: "BAN CHỈ ĐẠO PHÒNG THỦ DÂN SỰ QUỐC GIA",
	username: "TKCN",
	image: "/src/assets/logo/logo.png",

	/* Social */
	links: [
		{
			label: "Github",
			href: "#",
			Icon: GithubIcon,
		},
		{
			label: "Twitter",
			href: "#",
			Icon: TwitterIcon,
		},
		{
			label: "LinkedIn",
			href: "#",
			Icon: LinkedinIcon,
		},
		{
			label: "Youtube",
			href: "#",
			Icon: YoutubeIcon,
		},
		{
			label: "CodePen",
			href: "#",
			Icon: CodepenIcon,
		},
		{
			label: "Dev.to",
			href: "#",
			Icon: BookCopyIcon,
		},
		{
			label: "Facebook",
			href: "#",
			Icon: FacebookIcon,
		},
	],

	navLinks: [
		{
			name: "Trang chủ",
			href: "/",
			Icon: HomeIcon,
			dropdown: [],
		},
		{
			name: "Giới thiệu",
			Icon: UserIcon,
			dropdown: [
				{
					name: "Tổng quan",
					href: "/ve-chung-toi/tong-quan",
				},
				{
					name: "Tổ chức UBQG TKCN",
					href: "/ve-chung-toi/to-chuc-ubqg-tkcn",
				},
				{
					name: "Tổ chức hệ thống TKCN",
					href: "/ve-chung-toi/to-chuc-he-thong-tkcn",
				},
				{
					name: "Tư liệu lịch sử",
					href: "/ve-chung-toi/tu-lieu-lich-su",
				},
			],
		},

		{
			name: "Tin tức",
			Icon: BadgeIcon,
			dropdown: [
				{
					name: "Báo cáo",
					href: "/tin-tuc/bao-cao",
				},
				{
					name: "Sự kiện",
					href: "/tin-tuc/su-kien",
				},
				{
					name: "Cơ sở dữ liệu tìm kiếm cứu nạn",
					href: "/tim-kiem-cuu-nan",
				},
				{
					name: "Văn bản chỉ đạo điều hành",
					href: "/tin-tuc/van-ban-chi-dao-dieu-hanh",
				},
				{
					name: "Hoạt động tìm kiếm cứu nạn",
					href: "/tin-tuc/hoat-dong-tim-kiem-cuu-nan",
				},
			],
		},
		{
			name: "Thư viện số",
			Icon: BadgeIcon,
			dropdown: [
				{
					name: "Thư viện ảnh",
					href: "/thu-vien-anh",
				},
				{
					name: "Thư viện video",
					href: "/thu-vien-video",
				},
			],
		},
		{
			name: "Thông cáo báo chí",
			href: "/bao-chi",
			Icon: BadgeIcon,
			dropdown: [],
		},
		{
			name: "Văn bản pháp luật",
			href: "/van-ban",
			Icon: BadgeIcon,
			dropdown: [],
		},
		{
			name: "Phổ biến kiến thức",
			href: "/kien-thuc",
			Icon: BadgeIcon,
			dropdown: [],
		},
	],
}