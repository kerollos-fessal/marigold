import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {
selectedFile: File | null = null;
   @ViewChild('fileInput') fileInput!: ElementRef;
  profileImageUrl: string | ArrayBuffer | null = null;
  updateProfileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initUpdateProfileForm();
  }

initUpdateProfileForm(){
    this.updateProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      profileImg: ['']
    });
}

  handleImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (file) {
      if (!file.type.match('image.*')) {
        alert('Please select an image file');
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) {
        alert('Image must be less than 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImageUrl = reader.result;
      
      };
      reader.readAsDataURL(file);
    }
  }

onSubmit(): void {
    if (this.updateProfileForm.valid) {
        console.log('Form submitted:', this.updateProfileForm.value);
        const formData = new FormData();
        Object.keys(this.updateProfileForm.value).forEach(key => {
            if (key !== 'profileImg') {
                formData.append(key, this.updateProfileForm.value[key]);
            }
        });
        if (this.selectedFile) {
            formData.append('profileImg', this.selectedFile);
        }
        console.log('Form submitted:', formData);
    }
}
}
