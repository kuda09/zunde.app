export interface ApplyNowModel {
  loan_details: loan_details[];
  person_details: person_details[];
  how_did_you_hear_about_us: string;
}

export interface person_details {

  first_name: string;
  last_name: string;
  contact_number: number;
  email_address: string;

}

export interface loan_details {

  desired_amout: number;
  date_required: string;
  loan_use: string;

}
