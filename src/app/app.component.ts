import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'codezen';

  formData!: FormGroup;
  usersData: any[] = [];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]]

    });
  }


  onAddMember() {
console.log(this.formData.value)
this.usersData.push(this.formData.value);

  }

  onSaveMembers() {
    const jsonData = JSON.stringify(this.usersData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'usersData.json';
    a.click();

    URL.revokeObjectURL(url);
  }





}
