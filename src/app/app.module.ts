import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StatsCounterComponent } from './components/stats-counter/stats-counter.component';
import { AboutComponent } from './pages/about/about.component';
import { TeleProspectingComponent } from './pages/services/lead-generation/tele-prospecting/tele-prospecting.component';
import { AppointmentSettingComponent } from './pages/services/lead-generation/appointment-setting/appointment-setting.component';
import { LeadNurturingComponent } from './pages/services/lead-generation/lead-nurturing/lead-nurturing.component';
import { AccountProfilingComponent } from './pages/services/lead-generation/account-profiling/account-profiling.component';
import { MarketIntelligenceComponent } from './pages/services/lead-generation/market-intelligence/market-intelligence.component';
import { EventPromotionsComponent } from './pages/services/lead-generation/event-promotions/event-promotions.component';
import { CustomBuiltComponent } from './pages/services/lead-generation/custom-built/custom-built.component';
import { TechnologyUsersComponent } from './pages/services/lead-generation/technology-users/technology-users.component';
import { ContentSyndicationComponent } from './pages/services/lead-generation/content-syndication/content-syndication.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    TestimonialsComponent,
    SidenavComponent,
    PageNotFoundComponent,
    StatsCounterComponent,
    AboutComponent,
    TeleProspectingComponent,
    AppointmentSettingComponent,
    LeadNurturingComponent,
    AccountProfilingComponent,
    MarketIntelligenceComponent,
    EventPromotionsComponent,
    ContentSyndicationComponent,
    CustomBuiltComponent,
    TechnologyUsersComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
