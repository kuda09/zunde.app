import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as moment from "moment";



@Component({
  selector: 'app-bank-statements',
  templateUrl: './bank-statements.component.html',
  styleUrls: ['./bank-statements.component.scss']
})
export class BankStatementsComponent implements OnInit {

  requiredMonths = [];

  public uploader:FileUploader = new FileUploader({url: URL});
  constructor() {

    this.generateLastThreeMonthsBankStatementsList()
  }


  ngOnInit() {


  }


  generateLastThreeMonthsBankStatementsList () {

    for(let i = 1 ; i< 4; i++){

      this.requiredMonths.push(moment().subtract(i, 'months').format('MMMM YYYY'));
    }

  }


}
