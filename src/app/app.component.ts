import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public tooltip: string

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.tooltip = 'mon tooltip';
  }

  setTooltip(tooltip: string): void {
    this.tooltip = tooltip;
  }

}
