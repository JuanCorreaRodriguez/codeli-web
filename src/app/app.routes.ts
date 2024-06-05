import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/landing/landing.component").then(m => m.LandingComponent),
  },
  {
    path: "about-us",
    loadComponent: () => import("./pages/about/about.component").then(m => m.AboutComponent),
  },
  {
    path: "contact-us",
    loadComponent: () => import("./pages/contact-codeli/contact-codeli.component").then(m => m.ContactCodeliComponent),
  },
  {
    path: "approach-landing",
    loadComponent: () => import("./pages/approach/approach.component").then(m => m.ApproachComponent),
  },
  {
    path: "web-development",
    loadComponent: () => import("./pages/web-dev/web-dev.component").then(m => m.WebDevComponent),
  },
  {
    path: "ui-ux",
    loadComponent: () => import("./pages/ui-ux/ui-ux.component").then(m => m.UiUxComponent),
  },
  {
    path: "consulting",
    loadComponent: () => import("./pages/consulting/consulting.component").then(m => m.ConsultingComponent),
  },
  {
    path: "business-strategies",
    loadComponent: () => import("./pages/business-strategies/business-strategies.component").then(m => m.BusinessStrategiesComponent),
  },
  {
    path: "portfolio",
    loadComponent: () => import("./pages/portfolio/portfolio.component").then(m => m.PortfolioComponent),
  },
  {
    path: "partner/:id",
    loadComponent: () => import("./pages/portfolio/partner/partner.component").then(m => m.PartnerComponent)
  },
  {
    path: "privacy",
    loadComponent: () => import("./pages/privacity/privacity.component").then(m => m.PrivacityComponent)
  },
  {
    path: "**",
    redirectTo: "404"
  },
  {
    path: "404",
    loadComponent: () => import("./pages/not-found/not-found.component").then(m => m.NotFoundComponent)
    // component: NotFoundComponent
  },
];
