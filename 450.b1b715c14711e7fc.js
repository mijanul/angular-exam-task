"use strict";(self.webpackChunkangular_exam_by_tushar_da=self.webpackChunkangular_exam_by_tushar_da||[]).push([[450],{4450:(w,v,l)=>{l.r(v),l.d(v,{SignupTask2Module:()=>Q});var s=l(6814),q=l(9351),i=l(95),e=l(4946);function T(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," First Name is required. "),e.qZA())}function A(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," Last Name is required. "),e.qZA())}function F(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," Email is required. "),e.qZA())}function N(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," Invalid email format. "),e.qZA())}function U(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," Password is required. "),e.qZA())}function C(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," Password must be at least 6 characters long and contain one uppercase letter, one digit, and one special character. "),e.qZA())}function I(n,r){if(1&n&&(e.TgZ(0,"option",23),e._uU(1),e.qZA()),2&n){const u=r.$implicit;e.xp6(1),e.hij(" ",u," ")}}function S(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," Gender is required. "),e.qZA())}function b(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," Age is required. "),e.qZA())}function k(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," Age must be greater than or equal to 18 years and maximum 150 years. "),e.qZA())}function J(n,r){1&n&&(e.TgZ(0,"div",22),e._uU(1," You must accept the terms and conditions to sign up. "),e.qZA())}const y=function(n){return{"disabled-button":n}},Y=[{path:"",component:(()=>{class n{constructor(u){this.formBuilder=u,this.genderOptions=["Male","Female"],this.signupForm=this.formBuilder.group({firstName:["",i.kI.required],lastName:["",i.kI.required],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/)]],gender:["Male",i.kI.required],age:["",[i.kI.required,i.kI.min(18),i.kI.max(150)]],acceptTerms:[!1,i.kI.requiredTrue]})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(i.qu))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-signup"]],decls:47,vars:16,consts:[[1,"form-container"],[3,"formGroup"],[1,"form-group"],["for","firstName"],["id","firstName","type","text","formControlName","firstName"],["class","error-message",4,"ngIf"],["for","lastName"],["id","lastName","type","text","formControlName","lastName"],["for","email"],["id","email","type","email","formControlName","email"],["for","pass"],["id","pass","type","password","formControlName","password"],["for","gender"],["id","gender","formControlName","gender"],["value","option",4,"ngFor","ngForOf"],["for","age"],["id","age","type","number","formControlName","age"],["for","checkbox",1,"custom-checkbox"],["id","checkbox","type","checkbox","name","acceptTerms","formControlName","acceptTerms"],[1,"checkmark"],[1,"button-group"],["type","submit",3,"disabled","ngClass"],[1,"error-message"],["value","option"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Sign Up"),e.qZA(),e.TgZ(3,"form",1)(4,"div",2)(5,"label",3),e._uU(6,"First Name"),e.qZA(),e._UZ(7,"input",4),e.YNc(8,T,2,0,"div",5),e.qZA(),e.TgZ(9,"div",2)(10,"label",6),e._uU(11,"Last Name"),e.qZA(),e._UZ(12,"input",7),e.YNc(13,A,2,0,"div",5),e.qZA(),e.TgZ(14,"div",2)(15,"label",8),e._uU(16,"Email"),e.qZA(),e._UZ(17,"input",9),e.YNc(18,F,2,0,"div",5),e.YNc(19,N,2,0,"div",5),e.qZA(),e.TgZ(20,"div",2)(21,"label",10),e._uU(22,"Password"),e.qZA(),e._UZ(23,"input",11),e.YNc(24,U,2,0,"div",5),e.YNc(25,C,2,0,"div",5),e.qZA(),e.TgZ(26,"div",2)(27,"label",12),e._uU(28,"Gender"),e.qZA(),e.TgZ(29,"select",13),e.YNc(30,I,2,1,"option",14),e.qZA(),e.YNc(31,S,2,0,"div",5),e.qZA(),e.TgZ(32,"div",2)(33,"label",15),e._uU(34,"Age"),e.qZA(),e._UZ(35,"input",16),e.YNc(36,b,2,0,"div",5),e.YNc(37,k,2,0,"div",5),e.qZA(),e.TgZ(38,"div",2)(39,"label",17),e._UZ(40,"input",18)(41,"span",19),e._uU(42," I accept the terms and conditions "),e.qZA(),e.YNc(43,J,2,0,"div",5),e.qZA(),e.TgZ(44,"div",20)(45,"button",21),e._uU(46," Signup "),e.qZA()()()()),2&o){let m,p,g,d,c,f,_,Z,a,h;e.xp6(3),e.Q6J("formGroup",t.signupForm),e.xp6(5),e.Q6J("ngIf",(null==(m=t.signupForm.get("firstName"))?null:m.hasError("required"))&&(null==(m=t.signupForm.get("firstName"))?null:m.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=t.signupForm.get("lastName"))?null:p.hasError("required"))&&(null==(p=t.signupForm.get("lastName"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.signupForm.get("email"))?null:g.hasError("required"))&&(null==(g=t.signupForm.get("email"))?null:g.touched)),e.xp6(1),e.Q6J("ngIf",(null==(d=t.signupForm.get("email"))?null:d.hasError("email"))&&(null==(d=t.signupForm.get("email"))?null:d.touched)),e.xp6(5),e.Q6J("ngIf",(null==(c=t.signupForm.get("password"))?null:c.hasError("required"))&&(null==(c=t.signupForm.get("password"))?null:c.touched)),e.xp6(1),e.Q6J("ngIf",(null==(f=t.signupForm.get("password"))?null:f.hasError("pattern"))&&(null==(f=t.signupForm.get("password"))?null:f.touched)),e.xp6(5),e.Q6J("ngForOf",t.genderOptions),e.xp6(1),e.Q6J("ngIf",(null==(_=t.signupForm.get("gender"))?null:_.hasError("required"))&&(null==(_=t.signupForm.get("gender"))?null:_.touched)),e.xp6(5),e.Q6J("ngIf",(null==(Z=t.signupForm.get("age"))?null:Z.hasError("required"))&&(null==(Z=t.signupForm.get("age"))?null:Z.touched)),e.xp6(1),e.Q6J("ngIf",((null==(a=t.signupForm.get("age"))?null:a.hasError("min"))||(null==(a=t.signupForm.get("age"))?null:a.hasError("max")))&&(null==(a=t.signupForm.get("age"))?null:a.touched)),e.xp6(6),e.Q6J("ngIf",(null==(h=t.signupForm.get("acceptTerms"))?null:h.hasError("required"))&&(null==(h=t.signupForm.get("acceptTerms"))?null:h.touched)),e.xp6(2),e.Q6J("disabled",!t.signupForm.valid)("ngClass",e.VKq(14,y,!t.signupForm.valid))}},dependencies:[s.mk,s.sg,s.O5,i._Y,i.YN,i.Kr,i.Fj,i.wV,i.Wl,i.EJ,i.JJ,i.JL,i.sg,i.u]})}return n})()}];let E=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[q.Bz.forChild(Y),q.Bz]})}return n})(),Q=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[s.ez,E,i.UX]})}return n})()}}]);