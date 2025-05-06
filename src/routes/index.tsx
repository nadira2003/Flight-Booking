import { RouteObject } from "react-router";
import Home from "../pages/Home";
import HowTo from "../pages/HowTo";
import Login from "../pages/Login";
import About from "../components/About";
import Layout from "../layout";
import BookNow from "../components/BookNow/Index";
import FAQ from "../pages/FAQ/FAQ";
import Contact from "../pages/contact/Contact";
import Results from "../pages/Results/Results";
import { BookingConfirmation } from "../components/BookingConfirmation/BookingConfirmation";

import SignUp from "../pages/SignUp/SignUp";

import DashboardH from "../pages/DashboardHome/DashboardHome";




const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <Home />,
					},

					{
						path:"/howto",
						element:<HowTo />,
					},
					{
						path:"/About",
						element:<About />,
					}
,

{
	path:"/FAQ",
	element:<FAQ />,
},

{
	path:"/Contact",
	element:<Contact />,
},

{
	path:"/Results",
	element:<Results />,
},

{
	path:"/BookingConfirmation",
	element:<BookingConfirmation />,
},


{
	path:"/BookNow",
	element:<BookNow />,
}
		

				],

			
			
			},
		],

		
	},

	{	
		path:"/Login",
		element:<Login />,
	},

	{	
		path:"/SignUp",
		element:<SignUp />,
	},
	
	
	{	
		path:"/DashboardH",
		element:<DashboardH />,
	},

	
];

export default routes;
