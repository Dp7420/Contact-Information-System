import { Component, OnInit } from '@angular/core';
import { Organization } from '../../Classes/organization';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrl: './add-organization.component.css'
})
export class AddOrganizationComponent{

  show=false;
  organization:Organization=new Organization();

  constructor(private authService:AuthServiceService, private router:Router){}

  onSubmit(){
    console.log(this.organization);
    this.addOrganization();
    this.openPopup();
  }
  openPopup(){
    this.show=true;
  } 

  validateForm() {
       // Validate Organization Name
    if (!this.organization.organizationName) {
      alert("You must enter Organization Name.");
      return false;
    }

    if (!this.organization.address1) {
      alert("You must enter Address 1.");
      return false;
    }

    if (!this.organization.address2) {
      alert("You must enter Address 2.");
      return false;
    }

    if (!this.organization.place) {
      alert("You must enter Place.");
      return false;
    }

    if (!this.organization.pinCode) {
      alert("You must enter Pincode.");
      return false;
    }

    // Validate Phone Number
    if (!this.organization.phoneNo) {
      alert("You must enter Phone Number.");
      return false;
    }

    if (!this.organization.teleEx) {
      alert("You must enter Tele Ex. It only Numbers");
      return false;
    }

    // Validate Email
    if (!this.organization.email) {
      alert("You must enter Email.");
      return false;
    }

    // Validate Register Number
    if (!this.organization.registerNo) {
      alert("You must enter Register Number.");
      return false;
    }

    // Validate Date of Registration
    if (!this.organization.dateOfReg) {
      alert("You must enter Date of Registration.");
      return false;
    }

    // Validate Inception Date
    if (!this.organization.inceptionDate) {
      alert("You must enter Inception Date.");
      return false;
    }

    if (!this.organization.logo) {
      alert("You must enter Logo.");
      return false;
    }

    // Validate CE Code
    if (!this.organization.cecode) {
      alert("You must enter CE Code.");
      return false;
    }

    // Validate CER Number
    if (!this.organization.cerno) {
      alert("You must enter CER Number.");
      return false;
    }

    // Validate GST Rate
    if (!this.organization.gstrate) {
      alert("You must enter GST Rate.");
      return false;
    }

    // Validate GST Number
    if (!this.organization.gstno) {
      alert("You must enter GST Number.");
      return false;
    }

    // Validate CST Number
    if (!this.organization.cstno) {
      alert("You must enter CST Number.");
      return false;
    }

    // Validate Form Date
    if (!this.organization.formDate) {
      alert("You must enter Form Date.");
      return false;
    }

    // Validate PANGIR
    if (!this.organization.pangir) {
      alert("You must enter PANGIR.");
      return false;
    }

    // Validate DRCL Number
    if (!this.organization.drclno) {
      alert("You must enter DRCL Number.");
      return false;
    }

    // Validate EXIM Code
    if (!this.organization.eximcode) {
      alert("You must enter EXIM Code.");
      return false;
    }

    // Validate PANEXT
    if (!this.organization.panext) {
      alert("You must enter PANEXT.");
      return false;
    }

    // Validate CST Rate
    if (!this.organization.cstrate) {
      alert("You must enter CST Rate.");
      return false;
    }

    // Validate Excise Duty Rate
    if (!this.organization.exciseDutyRate) {
      alert("You must enter Excise Duty Rate.");
      return false;
    }

    // Validate TDS Account
    if (!this.organization.tdsaccount) {
      alert("You must enter TDS Account.");
      return false;
    }

    // All validations passed
    return true;
}

addOrganization() {
  // Validate the form
  if (this.validateForm()) {
      // If the form is valid, proceed with adding the organization
      // Call the authService to create organization info
      this.authService.createOrganizationInfo(this.organization).subscribe(data => {
          // Handle the response data, for example, log it
          console.log(data);
          // Redirect to the organization list page after successful addition
          this.router.navigate(['/organizationList']);
      });
      // Log a success message
      console.log("Organization added successfully.");
  } else {
      // If the form is not valid, do nothing
      console.log("Organization not added. Please correct the form errors.");
  }
}

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  // Do something with the selected file, such as uploading it
}

}
