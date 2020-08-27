# LightboxDemo

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6. So that this lighbox is reusable in any angular application.
This solution contains 2 projects.

1.Lightbox library - library code can be found under projects/mylightbox

2.Demo project which consumes lightbox library - consuming project can be found under src directory

How To Use lightbox library in your Angular project

1. Install the library to your angular app.
  (Import a local developed module into a project	https://stackoverflow.com/questions/48106093/pack-import-a-local-developed-module-into-a-project)

2. Import library in your module file (lightbox-demo/src/app/app.module.ts)

	import { BrowserModule } from '@angular/platform-browser';<br>
	import { NgModule } from '@angular/core';<br>
	import { AppRoutingModule } from './app-routing.module';<br>
	import { AppComponent } from './app.component';<br>
	import { MylightboxModule } from 'mylightbox';<br><br>
  
	@NgModule({<br>
	  declarations: [<br>
		AppComponent<br>
	  ],<br>
	  imports: [<br>
		BrowserModule,<br>
		AppRoutingModule,<br>
		MylightboxModule<br>
	  ],<br>
	  providers: [],<br>
	  bootstrap: [AppComponent]<br>
	})<br>
	export class AppModule { }<br>

3. Create div element with id="lightbox-wrapper" in your html file, and add images to be included in the lighbox. Make sure to refer the image correctly and add class my-lightbox.

	  &lt;div id=&quot;lightbox-wrapper&quot;&gt;
	    &lt;img src=&quot;assets/images/image1.jpg&quot; class=&quot;my-lightbox&quot; /&gt;<br>
	    &lt;img src=&quot;assets/images/image2.jpg&quot; class=&quot;my-lightbox&quot; /&gt;<br>
	    &lt;img src=&quot;assets/images/image3.jpg&quot; class=&quot;my-lightbox&quot; /&gt;<br>
	    &lt;img src=&quot;assets/images/image4.jpg&quot; class=&quot;my-lightbox&quot; /&gt;<br>
	    &lt;img src=&quot;assets/images/image5.jpg&quot; class=&quot;my-lightbox&quot; /&gt;<br>
	  &lt;/div&gt;

	  Also please not that library will use this to determine which images need to be included in the lightbox. Location of this wrapper does not matter as long as it is within html file.

4. Lastly, Add lib-my-demo-lib tag in your view where you expect to render the gallery(lightbox-demo/src/app/app.component.html)

	  &lt;lib-my-demo-lib&gt;&lt;/lib-my-demo-lib&gt;

