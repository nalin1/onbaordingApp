import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pageText } from './onboarding.enum';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  firstFormGroup: FormGroup = this.fb.group({
    fullName: [''],
    displayName: ['']
  });
  secondFormGroup: FormGroup = this.fb.group({
    workspaceName: [''],
    workspaceUrl: ['']
  });

  brand: string = pageText.brand;
  logoUrl: string = pageText.logoUrl;
  doneImg: string = pageText.doneImg;
  welcomeHeader: string = pageText.welcomeHeader;
  welcomeText: string = pageText.welcomeText;
  fullName: string = pageText.fullName;
  displayName: string = pageText.displayName;
  create: string = pageText.create;
  setupTitle: string = pageText.setupTitle;
  workspaceText: string = pageText.workspaceText;
  workspaceName: string = pageText.workspaceName;
  workspaceUrl: string = pageText.workspaceUrl;
  optional: string = pageText.optional;
  planTitle: string = pageText.planTitle;
  planText: string = pageText.planText;
  launchTitle: string = pageText.launchTitle;
  launchText: string = pageText.launchText;
  launchBtn: string = pageText.launchBtn;
  required: string = pageText.required;
  isLinear= true;

  workspace = [{ icon: '../../assets/self.JPG', header: 'For myself', text: 'write better. think more clearly. Stay organized' },
  { icon: '../../assets/team.JPG', header: 'With my team', text: 'Wikis, docs, tasks & projects, all in one place' }]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      fullName: ['', Validators.required],
      displayName: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      workspaceName: ['', Validators.required],
      workspaceUrl: ['']
    });
  }
  get userInfo() { return this.firstFormGroup.controls; }
  get workspacInfo() { return this.secondFormGroup.controls; }

  onSubmitUserInfo() {
    if (this.firstFormGroup.invalid) {
      return;
    }
  }
  onSubmitWorkspaceInfo() {
    if (this.secondFormGroup.invalid) {
      return;
    }

  }

}

