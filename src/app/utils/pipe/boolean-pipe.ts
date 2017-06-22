import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'boolean'
})

export class BooleanPipe implements PipeTransform {
	constructor() {}

	transform(flag: boolean): string {
		console.log(flag)//true
		console.log(flag === true);//true
		return flag == true ? "text-danger":"text-info";
	}
}
