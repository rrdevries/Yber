import { Time } from '@angular/common';

export class Ride {
  public name: string;
  public startPoint: Location;
  public endPoint: Location;
  public pickupDate: Date;
  public pickupTime: Time; 
  public driver: string;

  constructor(name: string, startPoint: Location, endPoint: Location, pickupDate: Date, pickupTime: Time, driver: string) {
    this.name = name;
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.pickupDate = pickupDate;
    this.pickupTime = pickupTime;
    this.driver = driver;
  }

}