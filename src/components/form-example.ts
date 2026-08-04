//Example:

// Imports ===========================================================
// import type { TypeName } from "../types/type-name.js";
// import { serviceName } from "../services/service-name.js";

// Variables =========================================================
// Declare variables here.

// Initialization ====================================================
//export function initComponentName(): void {
  //initEvents();

  // Initialize component.
//}

// Events ============================================================
//function initEvents(): void {
  //const form = document.querySelector<HTMLFormElement>("#form");
  //if (!form) { throw new Error('"#form" element not found.');}

  //form.addEventListener("submit", onSubmit);
//}

// Data =============================================================
// OBS: Create a type for your form data.

//function getFormData(): TypeName {
  //const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
  //if (!nameInput) { throw new Error('"#nameInput" element not found.');}
  //const numberInput = document.querySelector<HTMLInputElement>("#numberInput");
  //if (!numberInput) {throw new Error('"#numberInput" element not found.');}

  //return {
    //id: 0,
    //name: nameInput.value.trim(),
    //number: Number(numberInput.value),
  //};
//}

// onSubmit ==========================================================
//function onSubmit(event: SubmitEvent): void {
  //event.preventDefault();

  //const data = getFormData();

  //if (!validate(data)) {
    //return;
  //}

  // serviceName.create(data);

  //clearForm();
//}

// Validation ========================================================
//function validate(data: TypeName): boolean {
  //if (!data.name) {
    //alert("Field is required.");
    //return false;
  //}

  //return true;
//}

// clearForm ===========================================================
// Clears all form fields.
//function clearForm(): void {
  //const form = document.querySelector<HTMLFormElement>("#form");
  //if (!form) { throw new Error('#form element not found.');}

  //form.reset();
//}

// setFormFieldData =====================================================
// Fills the form fields with data.
//export function setFormFieldData(data: TypeName): void {
  //const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
  //const numberInput = document.querySelector<HTMLInputElement>("#numberInput");
  //if (!nameInput || !numberInput) { throw new Error("Form fields not found.");}
  //nameInput.value = data.name;
  //numberInput.value = String(data.number);
//}
