import { Pipe, PipeTransform } from "@angular/core";
import { OddDirection } from "src/app/models/enums/oddDirection";

@Pipe({
  name: "newValue"
})
export class OddsValPipe {
  transform(value:number,direction:OddDirection,marge:number):any  {
    if (direction == OddDirection.up){
      value = value+marge;
    }
    if (direction == OddDirection.down){
      value = value+marge;
    }
    return value;
  }
}