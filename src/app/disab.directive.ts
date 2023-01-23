import {
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Button } from 'primeng/button';
import { AuthService } from './services/auth.service';

@Directive({
  selector: '[appDisab]',
})
export class DisabDirective implements OnInit {
  @Output()
  setTooltip = new EventEmitter<string>();

  @Input('appDisab')
  tooltip: string;

  constructor(
    private button: Button,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.button.disabled = this.authService.getAuth();
    this.button.styleClass = 'p-button-warning';
    console.log(this.tooltip);
    this.tooltip = 'modified tooltip';
    setTimeout(() => {
      this.setTooltip.emit(this.tooltip);
    }, 1000);
  }
}
