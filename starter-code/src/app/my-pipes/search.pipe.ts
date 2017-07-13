import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    if (!value) {
      return[];
    }
    if (!searchTerm) {
      return value;
    }

    let matchedResults = [];

    searchTerm = searchTerm.toLowerCase();

    value.forEach((oneItem) => {
    // lower case the name so that it always match with searchTerm
    // if the name has the searchterm in it, push it to the new array
    if (oneItem.name.toLowerCase().includes(searchTerm)) {
      matchedResults.push(oneItem);
    }
  });
  return matchedResults
  }
}
