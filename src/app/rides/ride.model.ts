import { Time } from '@angular/common';

export class Ride {
  public name: string;
  public driverName: string;
  public driverImage: string;

  constructor(name: string, driverName: string, driverImage: string) {
    this.name = name;
    this.driverName = driverName;
    this.driverImage = driverImage;
  }

}