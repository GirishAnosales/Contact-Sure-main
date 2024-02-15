import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { TeleProspectingComponent } from './pages/services/lead-generation/tele-prospecting/tele-prospecting.component';
import { AppointmentSettingComponent } from './pages/services/lead-generation/appointment-setting/appointment-setting.component';
import { LeadNurturingComponent } from './pages/services/lead-generation/lead-nurturing/lead-nurturing.component';
import { AccountProfilingComponent } from './pages/services/lead-generation/account-profiling/account-profiling.component';
import { MarketIntelligenceComponent } from './pages/services/lead-generation/market-intelligence/market-intelligence.component';
import { ContentSyndicationComponent } from './pages/services/lead-generation/content-syndication/content-syndication.component';
import { EventPromotionsComponent } from './pages/services/lead-generation/event-promotions/event-promotions.component';
import { CustomBuiltComponent } from './pages/services/lead-generation/custom-built/custom-built.component';
import { TechnologyUsersComponent } from './pages/services/lead-generation/technology-users/technology-users.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {
    path: 'services',
    children: [
      // { path: 'data-services' },
      {
        path: 'lead-generation',
        children: [
          { path: 'account-profiling', component: AccountProfilingComponent },
          { path: 'appointment-settings', component: AppointmentSettingComponent },
          { path: 'custom-built', component: CustomBuiltComponent },
          { path: 'event-promotions', component: EventPromotionsComponent },
          { path: 'lead-nurturing', component: LeadNurturingComponent },
          { path: 'market-intelligence', component: MarketIntelligenceComponent },
          { path: 'technology-users', component: TechnologyUsersComponent },
          { path: 'tele-prospecting', component: TeleProspectingComponent },
          { path: 'content-syndication', component: ContentSyndicationComponent },
        ]
      },
    ]
  },

  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
