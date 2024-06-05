import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-social-proof',
  standalone: true,
  imports: [
    TranslateModule,
    NgOptimizedImage
  ],
  templateUrl: './social-proof.component.html',
  styleUrl: './social-proof.component.scss'
})
export class SocialProofComponent {

}
