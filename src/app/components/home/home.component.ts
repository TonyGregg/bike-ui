import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = ['Globto MTM 29 Full Suspension',
                       'Globo Carbon Fiber Race Series',
                       'Globo Time Trial Blade'];
  bikeForm: FormGroup;

  validMessage  = '';

  constructor(private bikeService: BikeService) {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
   }

  ngOnInit() {
  }
  submitRegistration() {
    if (this.bikeForm.valid ) {
      this.validMessage = 'Your bike registration has been successful. Thank you!';

      this.bikeService.createBike(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      // tslint:disable-next-line:semicolon
      )// end of subscribe
    } else {
      this.validMessage = 'Please complete all the fields in the form before submitting';
    }
  }

}
