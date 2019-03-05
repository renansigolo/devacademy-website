import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'

import { ServiceWorkerModule } from '@angular/service-worker'
import { AppComponent } from './app.component'

import { environment } from '../environments/environment'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { SharedModule } from '@shared/shared.module'

import { HomeComponent } from '@pages/home/home.component'
import { SignupComponent } from './modals/signup/signup.component'
import { CoursesComponent } from '@pages/courses/courses.component'
import { CourseDetailsComponent } from '@pages/course-details/course-details.component'
import { NewsletterComponent } from './components/web/newsletter/newsletter.component'
import { YoutubeComponent } from './components/web/youtube/youtube.component'
import { AwardsComponent } from './components/web/awards/awards.component'
import { LocationComponent } from './components/web/location/location.component'

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SignupComponent,
		CoursesComponent,
		CourseDetailsComponent,
		NewsletterComponent,
		YoutubeComponent,
		AwardsComponent,
		LocationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ServiceWorkerModule.register('/ngsw-worker.js', {
			enabled: environment.production
		}),
		SharedModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatGridListModule,
		MatDialogModule,
		MatInputModule,
		MatExpansionModule,
		MatCardModule,
		MatTabsModule
	],
	entryComponents: [SignupComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
