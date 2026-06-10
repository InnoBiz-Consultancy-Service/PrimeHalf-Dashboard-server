import { Router } from "express"
import UserRoutes from "../modules/user/user.router"
import AdminProfileRoutes from "../modules/profile/profile.route"


export const router = Router()

const moduleRoutes = [
    {
        path: "/user",
        route: UserRoutes
    },
  {
    path: "/profile",
    route: AdminProfileRoutes
  }
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

// router.use("/user", UserRoutes)
// router.use("/tour", TourRoutes)
// router.use("/division", DivisionRoutes)
// router.use("/booking", BookingRoutes)
// router.use("/user", UserRoutes)