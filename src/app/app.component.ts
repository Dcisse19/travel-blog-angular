import {ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-blog';
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener!: () => void;
  showButton!: boolean;

  constructor(private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
    private location: Location){}

  ngOnInit(){
    // this.mobileQuery = this.media.matchMedia('(min-width:600px)');
    // this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);

    this.location.onUrlChange(state => {
      this.location.path().includes('article') ? this.showButton = true : this.showButton = false;
    })
  }
}
