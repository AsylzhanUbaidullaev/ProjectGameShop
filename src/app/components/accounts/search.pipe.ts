import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export  class SearchPipe implements PipeTransform{
  transform(accounts, value){
    return accounts.filter( account => {
      return account.th.includes(value);
    }
    )
  }

}
