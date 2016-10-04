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
  home_address: string;
  post_code: string;
  home_phone: string;
  dob: string;
  share_total: string;
  national_insurance: string;


}

export interface loan_details {

  desired_amout: number;
  date_required: string;
  loan_use: string;

}

export interface business_details {
  legal_name: string,
  business_address: string;
  post_code: string;
  business_phone: number;
  business_trading_date: Date;
  legal_entity_type: string;
  business_tax_id: string;
  annual_revenue: string;
  bank_balance: number;
}
