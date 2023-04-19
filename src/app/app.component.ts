import {ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-blog';
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener!: () => void;

  constructor(private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef){}

  ngOnInit(){
    this.mobileQuery = this.media.matchMedia('(min-width:600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
