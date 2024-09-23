// src/app/create/create.page.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  taskForm: FormGroup;
  tasks: { title: string; description: string; done: boolean }[] = [];
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      done: [true],
    });
  }

  ngOnInit() {
    console.log('Ejemplo pull request');
  }

  addTask() {
    this.submitted = true;
    if (this.taskForm.invalid) {
      return;
    }
    const newTask = this.taskForm.value;
    this.tasks.push(newTask);
    this.taskForm.reset({ done: false });
    this.submitted = false;
  }

  toggleTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
