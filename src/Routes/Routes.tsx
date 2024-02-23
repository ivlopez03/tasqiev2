import App from "@/App";
import ErrorPage from "@/error-page";
import CalendarPage from "@/pages/CalendarPage/CalendarPage";
import HomePage from "@/pages/HomePage/HomePage";
import MyideasPage from "@/pages/MyideasPage/MyIdeas";
import MyproductivityPage from "@/pages/MyproductivityPage/MyproductivityPage";
import PlanPage from "@/pages/PlanPage/PlanPage";
import RoutinePage from "@/pages/RoutinePage/RoutinePage";
import WorkspacePage from "@/pages/WorkspacePage/WorkspacePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            { path: "/home", element: <HomePage/> },
            { path: "/myideas", element: <MyideasPage/> },
            { path: "/myproductivity", element: <MyproductivityPage/> },
            { path: "/routines", element: <RoutinePage/> },
            { path: "/calendar", element: <CalendarPage/> },
            { path: "/workspaces", element: <WorkspacePage/> },
            { path:"/plan/:create",  element: <PlanPage/> },
        ]
    }
])