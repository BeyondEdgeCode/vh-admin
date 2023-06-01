import {Outlet} from "react-router-dom";
import {Navbar} from "../products/navbar/navbar";

export const Settings = () => {
	const links = [
		{
			title: "Файлы",
			to: "/settings/object-storage"
		},
		{
			title: "Баннеры",
			to: "/settings/image-carousel"
		}
	]
	return (
		<>
			<Navbar dirs={links}/>
			<Outlet/>
		</>
	)
}