import authRoute from './Auth/router'
import userRoutes from './User/router'
import propertyRoutes from './Property/router'
import flatRoutes from './Flat/router'
import mediaRoutes from './media/router'
import complianRoutes from './Complian/router'
import commentRoutes from './comments/router'
import serviceChargeRoutes from './ServiceCharge/router'
import PaymentRoutes from './Payment/router'
import contactAuthRoute from './ContactAuth/router'
import ContactRoute from './contacts/router'

export = {
  auth: {
    routes: authRoute,
  },
  user: {
    routes: userRoutes,
  },
  property: {
    routes: propertyRoutes,
  },
  flat: {
    routes: flatRoutes,
  },
  media: {
    routes: mediaRoutes,
  },
  complian: {
    routes: complianRoutes,
  },
  comment: {
    routes: commentRoutes,
  },
  serviceCharge: {
    routes: serviceChargeRoutes,
  },
  payment: {
    routes: PaymentRoutes,
  },
  contactAuth: {
    routes: contactAuthRoute,
  },
  contact: {
    routes: ContactRoute,
  },
}
